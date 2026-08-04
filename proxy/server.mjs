// The margin's door for the HOSTED Phloem (2026-08-03) — the one piece of
// Phloem that is a server, and it exists for exactly one reason: a web
// writer cannot be handed a key.
//
// On the desktop the engine reads ~/.phloem/api-key and talks to Anthropic
// from the writer's own machine — never-custody applied to keys, the
// writer's key and the writer's bill. In a browser there is no such file,
// and the localStorage route (the console hatch) would put a live key in a
// page anyone can open a devtools panel on. So the hosted build ships NO
// key at all, and the margin speaks through here instead: the key lives on
// this box, in this process, and never crosses to the page.
//
// WHAT THIS IS NOT: a general Anthropic relay. It accepts exactly the one
// request shape engine.ts sends, pins the model itself, caps max_tokens
// itself, and refuses everything else. A proxy that forwards whatever it
// is given is an open relay wearing a licence's clothes — anyone who got
// past the door could point their own client at it and spend the house's
// money on whatever they liked.
//
// THE WALLET IS THE ASSET HERE. No writer's work is stored on this box —
// every garden lives in its owner's browser — so the thing worth guarding
// is not data, it is the bill. Hence three independent brakes: a per-day
// count per credential (a runaway page), a monthly spend ceiling for the
// whole house (a leaked credential), and Nginx's own rate limit in front
// (a burst). Any one of them failing leaves the other two standing.
//
// AND IT NEVER READS THE WRITING. The prompt and the page go through this
// process and are never logged, never persisted, never counted by content.
// What is written down is arithmetic: who, when, how many tokens. A
// surface whose whole claim is that the writer's words are theirs may not
// keep a copy of them on the way past.

import { createServer } from 'node:http';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

// ------------------------------------------------------------- the clock
//
// EVERY LINE IS STAMPED (2026-08-04). The log carried no times at all,
// and the first question ever asked of it could not be answered: "the
// margin failed about half an hour ago — was it slow, or was it
// refused?" Both leave the same silence on the page, they want opposite
// remedies, and without a clock the log cannot tell them apart even
// though it holds both answers.
//
// STAMPED AT THE CONSOLE, not at each call site, so a line added later
// cannot forget — the same discipline as fateOf() and the pile's
// subtraction: what every writer must remember is what one writer
// eventually forgets. It also catches anything the SDK says on its way
// past, which is exactly the output nobody thought to stamp.
//
// LOCAL TIME, with the offset. This box runs Pacific/Auckland, so local
// IS the gardener's calendar — and the offset rides along so a log read
// from anywhere else is not a puzzle. Third outing for a lesson recorded
// twice already (engine.ts's meter, then every export dated a day early
// until 2026-07-21): a time a person reads must be rendered in theirs.
const clock = new Intl.DateTimeFormat('sv-SE', {
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false, timeZoneName: 'shortOffset',
});
for (const level of ['log', 'warn', 'error']) {
  const raw = console[level].bind(console);
  console[level] = (...args) => raw(clock.format(new Date()), ...args);
}

// ---------------------------------------------------------------- config

const HERE = dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PHLOEM_PROXY_PORT ?? 8787);
// Bound to loopback by DESIGN: the web server in front terminates nothing
// and holds no key, but it IS the only thing that should be able to reach
// this process — which does no auth of its own and holds the wallet. Was
// Nginx before 2026-08-04; is app.js now. The reasoning is unchanged and so
// is the binding.
const HOST = process.env.PHLOEM_PROXY_HOST ?? '127.0.0.1';

// THE KEY COMES FROM A FILE IF THE ENVIRONMENT DOES NOT CARRY IT
// (2026-08-04). supervisord's config file is how a process on this box gets
// started, and putting the key in it would put the key in a config file
// that every future edit, backup and support session touches. A file whose
// whole job is to hold one secret can be chmod 600 and left alone — and it
// is the same arrangement the DESKTOP engine already uses (~/.phloem/api-key),
// so there is one place a person has to remember rather than two.
const KEY_PATH = process.env.PHLOEM_KEY_FILE ?? join(homedir(), '.phloem', 'api-key');
function keyFromFile() {
  try {
    const k = readFileSync(KEY_PATH, 'utf8').trim();
    return k || undefined;
  } catch {
    return undefined; // absent or unreadable: the env var is the other road
  }
}
const API_KEY = process.env.ANTHROPIC_API_KEY || keyFromFile();

// THE MODEL IS PINNED HERE, NOT BY THE PAGE. The client sends one, and it
// is IGNORED — a request that could name its own model could name the most
// expensive one there is. Which model this should be is the gardener's
// call and a real decision, so it is one line of config and not a guess:
//   claude-opus-4-8  — what the desktop engine uses today; the margin's
//                      current voice exactly, and the default here so that
//                      turning the proxy on changes nothing about how the
//                      margin sounds.
//   claude-opus-5    — the current flagship, at the SAME price as 4.8
//                      ($5/$25 per Mtok). A straight upgrade if the voice
//                      holds; worth an A/B before a room sees it.
//   claude-haiku-4-5 — the settled licence-covers-usage assumption, and a
//                      fifth of the cost ($1/$5). The margin's bar is high
//                      ("speak only if you would interrupt a colleague
//                      mid-sentence"), so this one is a QUALITY decision
//                      wearing a price tag — test it against a real leaf
//                      before a pilot, don't adopt it on arithmetic alone.
const MODEL = process.env.PHLOEM_ENGINE_MODEL ?? 'claude-opus-4-8';

// The ceiling on any single answer. engine.ts asks for 1024; this is the
// house's own limit on what it will honour, so a client asking for 64000
// gets 1024 rather than a bill.
const MAX_TOKENS = Number(process.env.PHLOEM_MAX_TOKENS ?? 1024);

// Per credential, per local day. The second brake: one page in a loop
// cannot spend the month in an afternoon. Generous enough that a writer
// working hard all day never meets it (engine.ts's own callCap is 400).
const DAILY_CALLS = Number(process.env.PHLOEM_DAILY_CALLS ?? 500);

// THE KILL SWITCH, in dollars of estimated spend for the calendar month
// across every credential. When it trips the margin goes quiet for
// everyone until the gardener raises it — which is the right failure: a
// silent margin is a Phloem that still writes, and the engine already
// treats a failed call as a sleeping engine rather than an error.
const MONTHLY_USD = Number(process.env.PHLOEM_MONTHLY_USD ?? 50);

// Where the counters survive a restart. Without this a crash-loop is an
// uncapped wallet, which is the one thing the ceiling exists to prevent.
//
// BESIDE THE CODE, NOT BESIDE THE CALLER — the lesson door/store.mjs
// already learned about its ledger, and this file had the same bug: './'
// resolves against the WORKING DIRECTORY, so a process started by
// supervisord in one place and one started by hand in another would keep
// two different meters, and the only symptom would be a ceiling that never
// seems to add up. The env var still wins for a real data volume.
const STATE_PATH = process.env.PHLOEM_STATE ?? join(HERE, 'phloem-proxy-state.json');

// Per-million-token rates, for the ceiling's arithmetic only — never
// billed from, never shown to anyone. An unknown model falls back to the
// dearest rate we know, so a mistake here can only ever over-count and
// close the door early.
const RATES = {
  'claude-opus-5': { in: 5, out: 25 },
  'claude-opus-4-8': { in: 5, out: 25 },
  'claude-sonnet-5': { in: 3, out: 15 },
  'claude-haiku-4-5': { in: 1, out: 5 },
};
const rateFor = (model) => RATES[model] ?? { in: 10, out: 50 };

if (!API_KEY) {
  console.error(
    `[phloem-proxy] no key — set ANTHROPIC_API_KEY or put one in ${KEY_PATH} — refusing to start`
  );
  process.exit(1);
}

const client = new Anthropic({ apiKey: API_KEY });

// ----------------------------------------------------------------- state

// Small enough to hold in memory and write whole: one entry per credential
// per day, plus the month's running spend. No database, deliberately — the
// same reason the invite ledger is a flat file. Nothing here is precious;
// losing it costs one day's counting, not anyone's work.
let state = { day: '', month: '', calls: {}, usd: 0 };

async function loadState() {
  try {
    state = JSON.parse(await readFile(STATE_PATH, 'utf8'));
  } catch {
    // first run, or a state file we can't read — start clean rather than die
  }
}

let writing = null;
async function saveState() {
  // Serialised through one promise so two concurrent requests can't
  // interleave writes, and written via a temp file + rename so a kill
  // mid-write leaves the old state rather than a truncated one. The log's
  // own one-queue discipline, at a much smaller scale.
  writing = (writing ?? Promise.resolve()).then(async () => {
    const tmp = `${STATE_PATH}.tmp`;
    await writeFile(tmp, JSON.stringify(state), 'utf8');
    await rename(tmp, STATE_PATH);
  }).catch(() => {});
  return writing;
}

// Local day and month, so "today" means what the gardener means by it.
function stamps(now) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return { day: `${y}-${m}-${d}`, month: `${y}-${m}` };
}

function roll(now) {
  const { day, month } = stamps(now);
  if (state.day !== day) {
    state.day = day;
    state.calls = {}; // a new day, a fresh allowance for everyone
  }
  if (state.month !== month) {
    state.month = month;
    state.usd = 0; // and a new month reopens the door
  }
}

// ------------------------------------------------------------ validation

// THE ONE SHAPE, checked field by field. Anything the engine does not send
// is refused rather than forwarded — no tools, no streaming, no system
// arrays, no extra sampling parameters. Adding a capability to the margin
// means adding it HERE too, deliberately, which is the point.
const MAX_BODY = 256 * 1024; // a page's worth of prose, generously
const MAX_MESSAGES = 8;

function validate(body) {
  if (typeof body !== 'object' || body === null) return 'not an object';
  const { system, messages, output_config: oc } = body;
  // SYSTEM MAY BE A STRING OR CACHEABLE BLOCKS (2026-08-03). The engine
  // now sends the second form so its 1,076-token prompt can carry a
  // cache_control breakpoint — see the note above cached() in engine.ts.
  // Checked field by field like everything else: text blocks only, and
  // the one cache directive, so this cannot become a channel for
  // arbitrary content dressed as a system prompt.
  if (system !== undefined) {
    if (typeof system === 'string') {
      if (system.length > 20_000) return 'system too long';
    } else if (Array.isArray(system)) {
      if (system.length > 4) return 'too many system blocks';
      let total = 0;
      for (const b of system) {
        if (typeof b !== 'object' || b === null) return 'bad system block';
        if (b.type !== 'text' || typeof b.text !== 'string') return 'system blocks must be text';
        total += b.text.length;
        if (b.cache_control !== undefined) {
          const cc = b.cache_control;
          if (typeof cc !== 'object' || cc === null) return 'bad cache_control';
          if (cc.type !== 'ephemeral') return 'cache_control must be ephemeral';
          if (cc.ttl !== undefined && cc.ttl !== '5m' && cc.ttl !== '1h')
            return 'cache_control ttl must be 5m or 1h';
        }
      }
      if (total > 20_000) return 'system too long';
    } else {
      return 'system must be a string or an array of text blocks';
    }
  }
  if (!Array.isArray(messages) || messages.length === 0) return 'messages must be a non-empty array';
  if (messages.length > MAX_MESSAGES) return 'too many messages';
  for (const m of messages) {
    if (typeof m !== 'object' || m === null) return 'bad message';
    if (m.role !== 'user' && m.role !== 'assistant') return 'bad message role';
    if (typeof m.content !== 'string') return 'message content must be a string';
  }
  // STRUCTURED OUTPUT IS PART OF THE SHAPE, NOT AN EXTRA (found by the first
  // live call, 2026-08-03 — the bug this whole test existed to catch). The
  // margin does not ask for prose: it asks for a json_schema whose notes
  // carry line, note, corrects and grounds, and engine.ts JSON.parses the
  // answer on the other side. Dropping it — which is what building the
  // outgoing request from scratch did — left the model free to answer in
  // sentences, and the margin then failed to parse its own reply and went
  // quiet. SILENTLY, because a quiet margin is indistinguishable from a
  // margin with nothing to say: exactly the failure that hides.
  //
  // Still checked rather than waved through: only `format`, only
  // json_schema, and a bounded schema — a request may not smuggle an
  // arbitrary payload through this field.
  if (oc !== undefined) {
    if (typeof oc !== 'object' || oc === null) return 'output_config must be an object';
    if (Object.keys(oc).some((k) => k !== 'format')) return 'output_config: format only';
    const f = oc.format;
    if (typeof f !== 'object' || f === null) return 'output_config.format must be an object';
    if (f.type !== 'json_schema') return 'output_config.format must be json_schema';
    if (typeof f.schema !== 'object' || f.schema === null) return 'output_config.format needs a schema';
    if (JSON.stringify(f.schema).length > 8000) return 'schema too large';
  }
  return null;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error('body too large'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function send(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(body),
    // Nothing this door says is worth keeping.
    'cache-control': 'no-store',
  });
  res.end(body);
}

// -------------------------------------------------------------- the door

const server = createServer(async (req, res) => {
  // The health check answers before anything else and touches no counter,
  // so a monitor can watch this process without spending a penny.
  if (req.method === 'GET' && req.url === '/health') {
    return send(res, 200, {
      ok: true,
      model: MODEL,
      month: state.month,
      spentUsd: Math.round(state.usd * 100) / 100,
      ceilingUsd: MONTHLY_USD,
    });
  }

  if (req.method !== 'POST' || req.url !== '/v1/messages') {
    return send(res, 404, { error: 'no such door' });
  }

  const now = new Date();
  roll(now);

  // WHO IS ASKING — set by Nginx from $remote_user, which it has already
  // checked against the htpasswd file. This process trusts that header
  // BECAUSE it only listens on loopback: nothing but Nginx can reach it,
  // so nothing but Nginx can forge it. If this ever binds to a public
  // interface, this line becomes a hole.
  const user = String(req.headers['x-phloem-user'] ?? 'anonymous').slice(0, 64);

  // Brake one: the house's monthly ceiling.
  if (state.usd >= MONTHLY_USD) {
    console.warn(`[phloem-proxy] ceiling reached (${state.usd.toFixed(2)}/${MONTHLY_USD}) — refusing`);
    return send(res, 503, { error: 'the margin is resting for this month' });
  }

  // Brake two: this credential's day.
  const used = state.calls[user] ?? 0;
  if (used >= DAILY_CALLS) {
    return send(res, 429, { error: 'this account has reached its day' });
  }

  let body;
  try {
    body = JSON.parse(await readBody(req));
  } catch {
    return send(res, 400, { error: 'unreadable request' });
  }

  const bad = validate(body);
  if (bad) return send(res, 400, { error: bad });

  // The house's own terms, not the client's: the model is pinned and the
  // ceiling on the answer is ours. Everything else the client sent that we
  // did not name above is dropped on the floor by construction — we build
  // the outgoing request from scratch rather than forwarding theirs.
  const maxTokens = Math.min(Number(body.max_tokens) || MAX_TOKENS, MAX_TOKENS);

  // Count the call BEFORE making it. A call that fails still cost a
  // round trip and could still be a runaway loop, and a counter that only
  // counts successes is a counter a failing client can spin past.
  state.calls[user] = used + 1;

  try {
    const answer = await client.messages.create({
      model: MODEL,
      max_tokens: maxTokens,
      // Rebuilt, not forwarded: a string passes as-is, and blocks are
      // reconstructed one field at a time so nothing rides along beside
      // the text and its cache directive.
      ...(body.system
        ? {
            system:
              typeof body.system === 'string'
                ? body.system
                : body.system.map((b) => ({
                    type: 'text',
                    text: b.text,
                    ...(b.cache_control ? { cache_control: b.cache_control } : {}),
                  })),
          }
        : {}),
      messages: body.messages.map((m) => ({ role: m.role, content: m.content })),
      // Rebuilt field by field, like everything else here — the schema is
      // the client's to specify (it is the shape the margin will parse),
      // the wrapper is ours.
      ...(body.output_config
        ? {
            output_config: {
              format: {
                type: 'json_schema',
                schema: body.output_config.format.schema,
              },
            },
          }
        : {}),
    });

    // The bill, estimated from what actually came back — and CACHED INPUT
    // IS NOT PRICED LIKE FRESH INPUT (2026-08-03, when the engine's system
    // prompt gained a cache breakpoint). `input_tokens` is only the
    // UNCACHED remainder; the cached tokens arrive in their own two
    // fields and cost a tenth to read, a quarter extra to write. Counting
    // them at full rate would have made the ceiling close the door on
    // roughly twice the spend that had actually happened.
    const rate = rateFor(MODEL);
    const u = answer.usage ?? {};
    const fresh = u.input_tokens ?? 0;
    const cacheRead = u.cache_read_input_tokens ?? 0;
    // 1.25× is the 5-minute TTL's write premium, which is what engine.ts
    // sends. A 1-hour TTL would be 2× and this would under-count — change
    // both together if that TTL is ever adopted.
    const cacheWrite = u.cache_creation_input_tokens ?? 0;
    const usd =
      (fresh / 1e6) * rate.in +
      (cacheRead / 1e6) * rate.in * 0.1 +
      (cacheWrite / 1e6) * rate.in * 1.25 +
      ((u.output_tokens ?? 0) / 1e6) * rate.out;
    state.usd += usd;
    void saveState();

    // ARITHMETIC ONLY. Not one word of the writer's page, the margin's
    // note, or the system prompt is written down here — see the head of
    // this file. If you ever want to debug what was said, the answer is
    // the writer's own leaf and its log, not this box.
    // THE CACHE COLUMNS ARE HERE TO BE WATCHED. A prefix below the model's
    // minimum does not cache and says nothing about it — the only tell is
    // `cr` sitting at zero across repeated calls while `in` stays high.
    // With the engine's prompt 52 tokens above the 1,024 floor, that is a
    // live possibility after any edit to it, so the number is on every
    // line rather than behind a flag.
    console.log(
      `[phloem-proxy] ${user} ok in=${fresh} cr=${cacheRead} cw=${cacheWrite} ` +
        `out=${u.output_tokens ?? 0} $${usd.toFixed(5)} ` +
        `month=$${state.usd.toFixed(2)}/${MONTHLY_USD}`
    );

    // Handed back verbatim: the SDK in the page parses this as an ordinary
    // Messages response, so engine.ts needs no notion of a proxy beyond
    // where it points.
    return send(res, 200, answer);
  } catch (err) {
    void saveState();
    // Typed, most specific first — the SDK's own classes, never a string
    // match on the message. The page treats every one of these the same
    // way (a quiet engine), but the STATUS is how the gardener's logs tell
    // a rate limit from a bad key at a glance.
    if (err instanceof Anthropic.RateLimitError) {
      console.warn(`[phloem-proxy] ${user} rate-limited upstream`);
      return send(res, 429, { error: 'the margin is busy' });
    }
    if (err instanceof Anthropic.AuthenticationError) {
      console.error('[phloem-proxy] the house key was refused — check ANTHROPIC_API_KEY');
      return send(res, 502, { error: 'the margin cannot reach its source' });
    }
    if (err instanceof Anthropic.APIConnectionError) {
      // Checked before APIError: in the TS SDK it is a SUBCLASS of it, so
      // the broad catch would swallow it.
      console.warn(`[phloem-proxy] ${user} could not reach upstream`);
      return send(res, 504, { error: 'the margin cannot reach its source' });
    }
    if (err instanceof Anthropic.APIError) {
      // THE HOUSE'S OWN KEY WAS REFUSED — expired, revoked, mistyped, or
      // scoped too narrowly (2026-08-04, from the gardener's question
      // about expiry dates). Said LOUDLY and in its own words, because
      // this is the one upstream failure that will not fix itself and the
      // one nobody will otherwise notice: every writer's margin simply
      // goes quiet, and a quiet margin is the ordinary correct answer to
      // most pages. console.error, not warn, so it stands out in
      // phloem-proxy-stderr.log — which is the only place on this box
      // that can tell you WHICH key is the problem.
      if (err.status === 401 || err.status === 403) {
        console.error(
          `[phloem-proxy] THE ANTHROPIC KEY WAS REFUSED (${err.status}). ` +
            `Every margin on this box is silent until it is replaced: put a ` +
            `new key in supervisord.conf and restart phloem-proxy.`
        );
        return send(res, 502, { error: 'the margin’s key was refused' });
      }
      console.warn(`[phloem-proxy] ${user} upstream ${err.status}`);
      return send(res, 502, { error: 'the margin could not answer' });
    }
    console.error('[phloem-proxy] unexpected', err?.message ?? err);
    return send(res, 500, { error: 'the margin could not answer' });
  }
});

await loadState();
roll(new Date());
server.listen(PORT, HOST, () => {
  console.log(
    `[phloem-proxy] listening on ${HOST}:${PORT} · model ${MODEL} · ` +
      `${DAILY_CALLS} calls/day/account · ceiling $${MONTHLY_USD}/month`
  );
});

// A clean exit banks the counters — a restart during a deploy must not
// hand everyone a fresh allowance.
for (const sig of ['SIGTERM', 'SIGINT']) {
  process.on(sig, () => {
    void saveState().then(() => process.exit(0));
  });
}
