# The welcome email

The other half of `invite.mjs`, which mints the link and deliberately does
not send it — the flow is a personal email, written by hand, with the link
pasted in. This file is the hand's template so each one doesn't have to be
composed from scratch. First used for Charlotte and her friends,
25 August 2026.

To send one:

    ssh henley "cd /container/application && node door/invite.mjs issue 'name <email>'"

paste the printed link over {{LINK}}, the first name over {{NAME}}, and
send it from your own mail client, personally. Re-issuing for the same
person revokes the old link.

Every claim below is checked against the margin's rules (25 Aug 2026):
the margin speaks only when asked; only what you select or ask is sent;
the report's verb is "report"; the reveal's greeting is "When in doubt,
press Option". If any of that changes, this file changes in the same
commit — the disclosure rule, one surface further out.

---

**Subject:** Your link to Phloem

Hi {{NAME}},

Here is your own personal link to Phloem:

{{LINK}}

It's yours alone — no account to create, no password, nothing to
install. Open it in your browser and write. The link works for 30 days;
if it ever stops working, ask me for a fresh one and I'll send it over.

What Phloem is, in a sentence: a writing tool where the document
remembers how it was written — and can show that story back to you, so
nobody ever has to take your word for how a piece of work came to be.

Three things to try:

1. Just write. Whenever you're wondering what Phloem can do, press
   Option (⌥) — everything appears there, and nowhere else.

2. Ask the margin. Select a few words and choose "ask the margin about
   this". It answers questions of fact and shows you where each answer
   came from. It never comments on your writing, and it never speaks
   unless you ask.

3. When you've written something real — fifteen minutes is plenty —
   press Option and choose "report". That's the heart of it: have a
   read of what it says about how you wrote.

Worth knowing:

- Your writing lives in your own browser on your own device — it is not
  stored on my server. Come back in the same browser to find your work
  again (and know that clearing that browser's stored site data would
  delete it).

- Nothing you write leaves your device unless you ask the margin a
  question — and then only the words you selected, or the question you
  wrote, are sent, so it can answer you. The cost of the answers is
  covered by me, within sensible daily limits.

- It's a prototype, and you're one of the first people anywhere to use
  it. If something seems odd, broken, or missing, that's genuinely the
  most useful thing you can tell me — just reply to this email.

- The full, honest detail — what it records, what it sends and where,
  what it can't do — is written up at https://phloem.nz/questions/ for
  you, or your parents, to read any time.

Happy writing,

Peter
