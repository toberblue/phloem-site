// The invite ledger (2026-08-03) — who has been given a way in, and the
// means to take it away again.
//
// Ported from mynzhome's OwnerHubAccessTokenService, which had already
// settled the two decisions that matter, and settled them well:
//
//   THE RAW TOKEN IS NEVER STORED. It exists in plaintext exactly once,
//   in the link that goes to the person. What this file keeps is its
//   sha256, so a stolen ledger is a list of names and hashes and gets
//   nobody through the door.
//
//   THE LINK IS NOT SINGLE-USE, and that is deliberate rather than lax.
//   Corporate mail security — Microsoft Defender's Safe Links above all,
//   and this pilot is aimed at Microsoft-shop schools — FETCHES the URLs
//   in a message before the human ever clicks. A strictly one-shot link
//   is burned by the scanner, and the teacher opens it to "this link has
//   already been used". A rolling window survives that; a one-shot link
//   would have made the audience it was built for the audience it locks
//   out. Re-issuing for the same person refreshes the window, which is
//   mynzhome's "refreshed each send".
//
// A flat file, like the proxy's meter and for the same reason: nothing
// here is precious, and a pilot's worth of invitations is not a database.

// ONE WRITER PER FILE, and it took an end-to-end test to see why it had
// to be (found 2026-08-03, immediately after the first one was written).
// The door runs as TWO processes — this ledger is edited by the invite
// CLI and read by the long-lived server — and the first cut had both of
// them writing it. Two faults fell out at once:
//
//   1. A revoke did not reach a live session. The server answers /auth
//      from an in-memory copy loaded at boot, so a revocation written by
//      the CLI was invisible to it until a restart. Verified: revoke,
//      then the same cookie still got 204.
//   2. Worse and quieter — a revoke could be UNDONE. The server rewrote
//      the whole ledger to stamp lastUsedAt, so a revoke landing between
//      its read and its write would be overwritten by the stale copy,
//      with nothing anywhere saying a credential had come back to life.
//
// So: the LEDGER belongs to the CLI, which is the only thing that writes
// it, and the server re-reads it when it changes on disk. The one fact
// the server has to record — that a link was opened — goes in its own
// file that only the server writes. Neither process can now clobber the
// other, because neither touches the other's file.

import { readFile, writeFile, rename, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';

// BESIDE THE CODE, NOT BESIDE THE CALLER. The default was './…', which is
// resolved against the working directory — so a server started by systemd
// in one place and an `invite.mjs` run by hand from another would keep two
// different ledgers, and the only symptom would be a freshly-minted link
// that the door has never heard of. No error, nothing in either log, just
// a person who cannot get in. Anchoring to the module's own directory
// makes the two agree wherever either is invoked from; the env var still
// wins for a real deployment that wants the ledger on a data volume.
const HERE = dirname(fileURLToPath(import.meta.url));
const PATH = process.env.PHLOEM_DOOR_LEDGER ?? join(HERE, 'phloem-door-ledger.json');
const USAGE = `${PATH}.usage`;
export const TTL_DAYS = Number(process.env.PHLOEM_INVITE_DAYS ?? 30);

// { invites: [{ id, name, hash, issuedAt, expiresAt, lastUsedAt, revokedAt }] }
let ledger = { invites: [] };

export const hashToken = (raw) => createHash('sha256').update(raw, 'utf8').digest('hex');

export async function load() {
  try {
    ledger = JSON.parse(await readFile(PATH, 'utf8'));
    if (!Array.isArray(ledger.invites)) ledger = { invites: [] };
  } catch {
    ledger = { invites: [] }; // first run
  }
  return ledger;
}

let writing = null;
export async function save() {
  // One queue, temp file, rename — the proxy's discipline, same reasons:
  // two concurrent writes may not interleave, and a kill mid-write must
  // leave the old ledger rather than half a new one.
  writing = (writing ?? Promise.resolve())
    .then(async () => {
      const tmp = `${PATH}.tmp`;
      await writeFile(tmp, JSON.stringify(ledger, null, 1), 'utf8');
      await rename(tmp, PATH);
    })
    .catch(() => {});
  return writing;
}

const now = () => new Date().toISOString();
const plusDays = (d) => new Date(Date.now() + d * 86_400_000).toISOString();

// Issue (or re-issue) for a person. Returns the RAW token — the only
// moment it exists in plaintext anywhere. Re-issuing revokes whatever
// they had: one live link per person, so "send me another" is also the
// answer to "I think someone saw my email".
export function issue(name) {
  for (const inv of ledger.invites) {
    if (inv.name === name && !inv.revokedAt) inv.revokedAt = now();
  }
  const raw = randomBytes(32).toString('hex');
  const invite = {
    id: randomBytes(8).toString('hex'),
    name,
    hash: hashToken(raw),
    issuedAt: now(),
    expiresAt: plusDays(TTL_DAYS),
    lastUsedAt: null,
    revokedAt: null,
  };
  ledger.invites.push(invite);
  return { raw, invite };
}

// Validate a raw token. Returns the invite, or null with a reason kept to
// ourselves — the door tells a caller nothing about WHY it said no, so a
// guessing client learns nothing from the difference between "unknown",
// "expired" and "revoked".
export function consume(raw) {
  if (typeof raw !== 'string' || raw.length < 32) return null;
  // NOTE: this does not stamp lastUsedAt — see the one-writer rule at the
  // head of this file. The server calls noteUse() instead, which writes
  // its own file.
  const want = hashToken(raw);
  const inv = ledger.invites.find((i) => {
    // Constant-time even though these are hashes of a 256-bit secret and
    // the timing leak is theoretical: the cost is nil and the habit is
    // the point.
    const a = Buffer.from(i.hash, 'utf8');
    const b = Buffer.from(want, 'utf8');
    return a.length === b.length && timingSafeEqual(a, b);
  });
  if (!inv) return null;
  if (inv.revokedAt) return null;
  if (Date.parse(inv.expiresAt) < Date.now()) return null;
  return inv;
}

// ------------------------------------------------- the server's own two

// Re-read the ledger when the CLI has changed it. Throttled by mtime, so
// /auth — which Nginx asks on every request, including every static asset
// — pays at most one stat a second rather than a read per request. Bounds
// how stale a revocation can be to that same second, which is the whole
// point: a credential taken back must stop working without a restart.
let lastSeen = 0;
let lastCheck = 0;
export async function refreshIfChanged() {
  const t = Date.now();
  if (t - lastCheck < 1000) return;
  lastCheck = t;
  try {
    const s = await stat(PATH);
    if (s.mtimeMs !== lastSeen) {
      lastSeen = s.mtimeMs;
      await load();
    }
  } catch {
    // no ledger yet, or unreadable — keep what we have rather than
    // opening the door by forgetting who was revoked
  }
}

// The one fact the server records, in the one file the server owns: that
// a link was opened, and when. Kept apart from the ledger so the two
// processes can never overwrite one another.
let usage = null;
let usageWriting = null;
export async function noteUse(id) {
  if (!usage) {
    try {
      usage = JSON.parse(await readFile(USAGE, 'utf8'));
    } catch {
      usage = {};
    }
  }
  usage[id] = now();
  usageWriting = (usageWriting ?? Promise.resolve())
    .then(async () => {
      const tmp = `${USAGE}.tmp`;
      await writeFile(tmp, JSON.stringify(usage), 'utf8');
      await rename(tmp, USAGE);
    })
    .catch(() => {});
  return usageWriting;
}

async function readUsage() {
  try {
    return JSON.parse(await readFile(USAGE, 'utf8'));
  } catch {
    return {};
  }
}

export function revoke(nameOrId) {
  let n = 0;
  for (const inv of ledger.invites) {
    if ((inv.name === nameOrId || inv.id === nameOrId) && !inv.revokedAt) {
      inv.revokedAt = now();
      n += 1;
    }
  }
  return n;
}

// The live revocation set, read by /auth on every request. A signed
// cookie is self-contained and would otherwise outlive the invite that
// minted it — so the cookie carries its invite's id and the door checks
// it here. In memory, so the check costs nothing on the hot path.
export function revokedIds() {
  const out = new Set();
  for (const inv of ledger.invites) {
    if (inv.revokedAt || Date.parse(inv.expiresAt) < Date.now()) out.add(inv.id);
  }
  return out;
}

// For the CLI's `list`: the ledger joined to the server's usage file, so
// "unopened" is a fact about the world and not just about this process.
export async function list() {
  const used = await readUsage();
  // never the hash — a listing is for a human, and the hash is the only
  // thing here that is worth anything to anybody else
  return ledger.invites.map(({ hash: _hash, ...rest }) => ({
    ...rest,
    lastUsedAt: used[rest.id] ?? null,
  }));
}
