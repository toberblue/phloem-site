#!/usr/bin/env node
// The gardener's end of the door (2026-08-03) — issue a link, see who has
// one, take one back.
//
// IT DOES NOT SEND THE EMAIL, and that is a decision rather than an
// omission. The flow this serves is "email me if you're keen and I'll
// send you something to try" — a personal reply that is already being
// written by hand. Minting the link and pasting it into that reply costs
// nothing, while an SMTP path inside the door would buy a dependency, a
// deliverability problem, and a new way for the whole pilot to fail
// silently (a link nobody receives is indistinguishable from a link
// nobody opened). If invitations ever outgrow a hand, this is the seam to
// add sending at — the ledger and the token are already right.
//
//   node door/invite.mjs issue "jane@school.nz"
//   node door/invite.mjs list
//   node door/invite.mjs revoke "jane@school.nz"

import { load, save, issue, revoke, list } from './store.mjs';

const BASE = process.env.PHLOEM_BASE_URL ?? 'https://phloem.example.nz';
const [cmd, arg] = process.argv.slice(2);

// STORED IN UTC, SHOWN IN LOCAL — the third outing for a lesson the
// constitution already records twice (engine.ts's meter, then every export
// dated a day early until 2026-07-21). An instant belongs in the ledger as
// an absolute point in time, and toISOString() is right for that; but
// slicing the first ten characters off it and showing them to a gardener
// in New Zealand prints yesterday's date all morning. Every date a human
// reads here is therefore rendered from the LOCAL calendar.
const localDay = (iso) => {
  const d = new Date(iso);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

await load();

if (cmd === 'issue') {
  if (!arg) {
    console.error('usage: invite.mjs issue <name-or-email>');
    process.exit(1);
  }
  const { raw, invite } = issue(arg);
  await save();
  // THE ONE MOMENT THE TOKEN EXISTS IN PLAINTEXT. It is printed here and
  // nowhere else — the ledger keeps only its sha256, so if this line is
  // lost the only remedy is to issue another. That is the intended
  // property, not a rough edge.
  console.log(`\n  ${BASE}/enter?t=${raw}\n`);
  console.log(`  for:     ${invite.name}`);
  console.log(`  expires: ${localDay(invite.expiresAt)}`);
  console.log(`  id:      ${invite.id}`);
  console.log(
    `\n  Re-issuing for the same person revokes this one — which is also\n` +
      `  the answer to "I think someone else saw my email".\n`
  );
} else if (cmd === 'list') {
  const rows = await list();
  if (!rows.length) console.log('no invitations issued');
  for (const r of rows) {
    const state = r.revokedAt
      ? 'revoked'
      : Date.parse(r.expiresAt) < Date.now()
        ? 'expired'
        : r.lastUsedAt
          ? 'in use'
          : 'unopened'; // never opened — the signal an emailed password could not give
    console.log(
      `${state.padEnd(9)} ${r.name.padEnd(28)} exp ${localDay(r.expiresAt)}` +
        (r.lastUsedAt ? `  last used ${localDay(r.lastUsedAt)}` : '')
    );
  }
} else if (cmd === 'revoke') {
  if (!arg) {
    console.error('usage: invite.mjs revoke <name-or-id>');
    process.exit(1);
  }
  const n = revoke(arg);
  await save();
  // Live sessions die with it: the cookie carries the invite's id and the
  // door checks it against the revoked set on every request.
  console.log(n ? `revoked ${n} invitation(s) for ${arg}` : `nothing live for ${arg}`);
} else {
  console.log('usage: invite.mjs issue <name> | list | revoke <name-or-id>');
  process.exit(1);
}
