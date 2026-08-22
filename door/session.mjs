// THE DOOR — who may come in, and nothing else.
//
// Phloem has no accounts and is not going to grow any: the constitution's
// fence says the user holds a pen, and a login screen inside the writing
// surface is the first brick of the thing on the other side of it. So the
// door stands OUTSIDE the app, and the app never learns that anyone was
// asked.
//
// WHY NOT AN EMAILED PASSWORD, which was the earlier plan: emailing a
// password is emailing a password. It is reusable, the person must store it
// somewhere, and it is very likely the same one they use elsewhere. A magic
// link transmits nothing a human keeps: the link is the credential, it is
// bound to one person, it expires, and it can be taken back.
//
// IT WAS A SEPARATE PROCESS UNTIL 2026-08-04, answering Nginx's
// `auth_request` subrequest with yes or no. That design assumed a Nginx we
// could write rules into, and henley's cannot be written into: the managed
// container gives one `location /` proxying to this Node process, with no
// sudo and the config file owned by root. So the SUBREQUEST BECOMES A
// FUNCTION CALL — `sessionFor(req)` in app.js, on the same request, in the
// same process. Everything the subrequest decided is decided here; nothing
// about the credential itself changed.
//
// WHAT THAT COSTS, stated plainly rather than discovered later: app.js now
// holds PHLOEM_DOOR_SECRET, because whatever verifies a signed cookie must
// have the key that signed it. There is no arrangement in which the gate
// does not hold it. WHAT IT DOES NOT COST is the separation that was
// actually load-bearing — THE ANTHROPIC KEY STAYS IN ITS OWN PROCESS, on
// loopback, reached only through the /engine relay. Two secrets, still two
// processes; the compromise of the web server does not hand over the
// wallet. That was always the division worth keeping, and it is kept.
//
// This module holds no ledger and reads no files: it is the crypto, the
// cookie and the two pages a stranger is allowed to see. The ledger (who
// has a link, and taking one back) is store.mjs, written only by the CLI.

import { createHmac, timingSafeEqual } from 'node:crypto';
import { consume, revokedIds, refreshIfChanged, noteUse, TTL_DAYS } from './store.mjs';

const SECRET = process.env.PHLOEM_DOOR_SECRET;
const COOKIE = 'phloem_door';
export const SESSION_DAYS = Number(process.env.PHLOEM_SESSION_DAYS ?? TTL_DAYS);

// Where a link lands once it is honoured. A PATH, never a URL taken from
// the request — a door that redirects wherever it is told is an open
// redirect, and this one is the front of a private trial.
export const LANDING = '/write/';

export function doorReady() {
  return typeof SECRET === 'string' && SECRET.length >= 32;
}

// ------------------------------------------------------------- the cookie

// A signed, self-contained session: base64url(payload) + '.' + HMAC. No
// store read on the hot path, which matters because the gate is consulted
// for EVERY request the app makes, including each static asset. Revocation
// is the one thing a self-contained token cannot do by itself, so the
// payload carries the invite's id and the gate checks it against the live
// revoked set — see store.revokedIds().
const b64u = (buf) => Buffer.from(buf).toString('base64url');

function sign(payload) {
  const body = b64u(JSON.stringify(payload));
  const mac = createHmac('sha256', SECRET).update(body).digest('base64url');
  return `${body}.${mac}`;
}

function verify(value) {
  if (typeof value !== 'string') return null;
  const dot = value.lastIndexOf('.');
  if (dot < 1) return null;
  const body = value.slice(0, dot);
  const mac = value.slice(dot + 1);
  const want = createHmac('sha256', SECRET).update(body).digest('base64url');
  const a = Buffer.from(mac, 'utf8');
  const b = Buffer.from(want, 'utf8');
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!payload || typeof payload.sub !== 'string') return null;
    if (typeof payload.exp !== 'number' || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function readCookie(req, name) {
  const raw = req.headers.cookie;
  if (!raw) return null;
  for (const part of raw.split(';')) {
    const eq = part.indexOf('=');
    if (eq < 0) continue;
    if (part.slice(0, eq).trim() === name) return decodeURIComponent(part.slice(eq + 1).trim());
  }
  return null;
}

function cookieHeader(value) {
  // HttpOnly: script must never be able to read it, so an XSS anywhere in
  // the page cannot lift the session. Secure: it may only ever travel over
  // TLS — and it still applies here, where TLS terminates at the HOST'S
  // EDGE and this container sees plain HTTP. The flag is an instruction to
  // the BROWSER, and the browser is on https://phloem.nz; nothing in this
  // process needs to know it is behind a terminator. SameSite=Lax rather
  // than Strict BECAUSE the magic link is a top-level navigation arriving
  // from a mail client — Strict would refuse to send the cookie on exactly
  // the journey this whole feature exists for, and the door would appear to
  // work and then bounce.
  return [
    `${COOKIE}=${encodeURIComponent(value)}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Max-Age=${SESSION_DAYS * 86_400}`,
  ].join('; ');
}

// ---------------------------------------------------------------- the gate

// WHO IS ASKING, or null. Was Nginx's `auth_request` subrequest; is now a
// call. Kept to pure crypto and one Set lookup — it is on the path of every
// asset the page loads.
export async function sessionFor(req) {
  const payload = verify(readCookie(req, COOKIE));
  if (!payload) return null;
  // Pick up anything the invite CLI has revoked since we last looked —
  // throttled to one stat a second, so a taken-back credential stops
  // working within a second rather than at the next restart. This is the
  // fix for the bug the first end-to-end test found.
  await refreshIfChanged();
  if (payload.jti && revokedIds().has(payload.jti)) return null;
  return { user: String(payload.sub).slice(0, 64), jti: payload.jti };
}

// A link being opened. Returns the Set-Cookie value on success, or null —
// and the door tells a caller NOTHING about why it said no, so a guessing
// client learns nothing from the difference between unknown, expired and
// revoked.
export async function honour(token) {
  // Read the ledger fresh before honouring a link, so a revoke issued a
  // moment ago is not walked straight past.
  await refreshIfChanged();
  const invite = consume(token);
  if (!invite) return null;
  // Who actually opened it — the signal an emailed password could never
  // give. Written to the server's own file, never the ledger.
  void noteUse(invite.id);
  return cookieHeader(
    sign({ sub: invite.name, jti: invite.id, exp: Date.now() + SESSION_DAYS * 86_400_000 })
  );
}

// ----------------------------------------------------------------- pages

// Served by the door rather than the app, because they are the OUTSIDE of
// the door and the app is the inside. Plain, quiet, and saying only what
// the person needs — never why they were refused.
const page = (title, body) =>
  `<!doctype html><meta charset="utf-8">` +
  `<meta name="viewport" content="width=device-width,initial-scale=1">` +
  `<meta name="robots" content="noindex,nofollow">` +
  `<title>${title}</title>` +
  `<style>body{font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;` +
  `color:#1f2428;background:#eceef0;margin:0;display:grid;place-items:center;min-height:100vh}` +
  `main{max-width:26rem;padding:2.5rem;background:#fff;border-radius:10px;` +
  `box-shadow:0 1px 3px rgba(0,0,0,.06)}h1{font-size:1.1rem;font-weight:600;margin:0 0 .75rem}` +
  `p{margin:0 0 .75rem;color:#4a5257}a{color:#2f6f4e}</style><main>${body}</main>`;

// No form, and nothing to type. The only way through this door is a link
// somebody was sent, so the page's whole job is to say so plainly and give
// the one instruction that can help.
export const WELCOME = page(
  'Phloem',
  `<h1>Phloem</h1>` +
    `<p>This is a private trial. If you were sent a link, open it again from your email.</p>` +
    `<p><a href="/">About Phloem</a></p>`
);

export const EXPIRED = page(
  'Phloem',
  `<h1>That link has expired</h1>` +
    `<p>Trial links last ${TTL_DAYS} days. Reply to the message that sent you here and ` +
    `a fresh one will follow.</p>`
);
