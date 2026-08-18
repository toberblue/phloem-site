// The container's nginx proxies everything to localhost:3000 (upstream "service",
// /etc/nginx/sites-available/default); supervisord keeps this process alive.
// Serves the Vite build output from dist/, reading per request so a redeploy
// of dist/ takes effect without a restart.
//
// AND SINCE 2026-08-04 IT IS ALSO THE DOOR. The hosted Phloem pilot was
// designed around Nginx doing three things — checking a session with
// `auth_request`, sending a refusal to /welcome with `error_page 401`, and
// proxy_pass'ing /engine to the process that holds the Anthropic key. None
// of that can be installed on this box: the managed container gives ONE
// `location /` pointing here, no sudo, and an nginx config owned by root.
// So this process does those three things instead. It is the same design
// with the same boundaries; only the thing enforcing them moved inwards.
//
// THE SHAPE, and which parts are public:
//
//   /            the marketing site, from dist/          PUBLIC
//   /contact     the letterbox                           PUBLIC
//   /enter?t=…   a magic link landing                    PUBLIC (it is the credential)
//   /welcome     the outside of the door                 PUBLIC
//   /write/…     the Phloem app itself                   GATED
//   /engine/…    the margin, relayed to the proxy        GATED
//
// TWO SECRETS, STILL TWO PROCESSES. This one holds PHLOEM_DOOR_SECRET,
// because whatever verifies a signed cookie must hold the key that signed
// it — there is no arrangement where the gate does not. It does NOT hold
// the Anthropic key: that lives in proxy/server.mjs, listening on loopback,
// reached only through the relay below. A compromise of this web server
// does not hand over the wallet, which was always the division worth
// keeping (see door/session.mjs).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { load as loadLedger } from './door/store.mjs';
import {
  sessionFor,
  honour,
  doorReady,
  WELCOME,
  EXPIRED,
  LANDING,
} from './door/session.mjs';

// EVERY LINE IS STAMPED (2026-08-04) — see the same block in
// proxy/server.mjs for the reasoning. The two processes' logs are read
// side by side when something is wrong, and one of them carrying times
// while the other does not would be worse than neither.
const clock = new Intl.DateTimeFormat('sv-SE', {
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false, timeZoneName: 'shortOffset',
});
for (const level of ['log', 'warn', 'error']) {
  const raw = console[level].bind(console);
  console[level] = (...args) => raw(clock.format(new Date()), ...args);
}

const ROOT = path.join(import.meta.dirname, 'dist');
// The built Phloem app, copied in from the phloem repo (see DEPLOY.md).
// Deliberately NOT under dist/: it is not built by this repo's Vite, and
// putting it in public/ would have Vite copy the whole app on every site
// build for nothing.
const WRITE_ROOT = path.join(import.meta.dirname, 'write');
const PORT = 3000;
const CONTACT_TO = 'peter@henley.nz';
const SENDMAIL = '/usr/sbin/sendmail';

// Where the margin's proxy is listening. Loopback by design: it holds the
// key and does no auth of its own, so nothing but this process should be
// able to reach it.
const ENGINE = process.env.PHLOEM_PROXY_ORIGIN ?? 'http://127.0.0.1:8787';
// Generous, because the thing on the other end is a language model and not
// a disk. Nginx's own proxy_read_timeout sits in front of this and is the
// tighter of the two until the host raises it.
const ENGINE_TIMEOUT_MS = Number(process.env.PHLOEM_ENGINE_TIMEOUT_MS ?? 55_000);
const MAX_ENGINE_BODY = 1_000_000;

// FAIL CLOSED. With no door secret there is no way to tell a tester from a
// stranger, so the gated half is shut rather than open — and it says so
// once, loudly, at boot, because a pilot that silently serves nothing is
// worse than one that will not start.
const DOOR = doorReady();
if (!DOOR) {
  console.error(
    '[phloem] PHLOEM_DOOR_SECRET is unset or under 32 chars — /write and /engine are CLOSED. ' +
      'The public site is unaffected.'
  );
}

// Naive per-IP rate limit for the contact form: 5 submissions per hour.
const recent = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter(t => now - t < 3600_000);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear(); // crude memory cap
  return hits.length > 5;
}

// One header line, injection-proofed: no CR/LF survives.
const headerSafe = s => s.replace(/[\r\n]+/g, ' ').trim();

function resultPage(res, status, title, body) {
  res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>
<style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.65;
max-width:34rem;margin:0 auto;padding:4rem 1.25rem;color:#212529;background:#fff}
a{color:#2f6f4e}@media(prefers-color-scheme:dark){body{color:#e6e6e6;background:#161a17}a{color:#6cc295}}</style>
</head><body><h1>${title}</h1><p>${body}</p><p><a href="/">Back to the page</a></p></body></html>`);
}

function handleContact(req, res) {
  const ip = headerSafe(req.headers['x-real-ip'] || req.socket.remoteAddress || '?');
  let raw = '';
  let tooBig = false;
  req.on('data', chunk => {
    raw += chunk;
    if (raw.length > 16384) { tooBig = true; req.destroy(); }
  });
  req.on('end', () => {
    if (tooBig) return;
    const form = new URLSearchParams(raw);
    const honeypot = form.get('website') || '';
    const name = (form.get('name') || '').slice(0, 200).trim();
    const email = (form.get('email') || '').slice(0, 200).trim();
    const message = (form.get('message') || '').slice(0, 5000).trim();
    const platforms = form.getAll('platform').filter(p => ['Browser', 'macOS', 'Windows', 'Linux'].includes(p));
    // Time-trap: the page stamps ms-since-load at submit. No stamp means no
    // script ran (HTML-parsing bot); under 6s means nobody read anything.
    // Suspect mail is tagged, never dropped — a human is never locked out.
    const rawElapsed = form.get('elapsed');
    const elapsed = rawElapsed ? Number(rawElapsed) : NaN;
    const suspect = !Number.isFinite(elapsed) || elapsed < 6000 || elapsed > 86_400_000;

    // Bots that fill the hidden field get a polite lie and no email.
    if (honeypot) { resultPage(res, 200, 'Thank you', 'Your message has been sent.'); return; }
    if (!email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      resultPage(res, 400, 'Something missing', 'An email address and a message are both needed — please go back and try again.');
      return;
    }
    if (rateLimited(ip)) {
      resultPage(res, 429, 'Too many messages', 'Please wait a while before sending another.');
      return;
    }

    const mail = [
      `To: ${CONTACT_TO}`,
      `From: Phloem site <noreply@henley.nz>`,
      `Reply-To: ${headerSafe(name ? `${name} <${email}>` : email)}`,
      `Subject: ${headerSafe((suspect ? '[suspect] ' : '') + 'Phloem site contact' + (platforms.length ? ` — test on ${platforms.join(', ')}` : ''))}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      `Name: ${name || '(not given)'}`,
      `Email: ${email}`,
      `Test platforms: ${platforms.length ? platforms.join(', ') : '(none ticked)'}`,
      `IP: ${ip}`,
      `Form time: ${Number.isFinite(elapsed) ? Math.round(elapsed / 1000) + 's' : 'no stamp (no script ran)'}`,
      '',
      message,
      '',
    ].join('\n');

    const child = spawn(SENDMAIL, ['-t'], { stdio: ['pipe', 'ignore', 'pipe'] });
    let errOut = '';
    child.stderr.on('data', d => { errOut += d; });
    // nginx gives us ~5s; answer whichever comes first — a clean exit or the clock.
    const timer = setTimeout(() => {
      console.log(`contact: sendmail slow, assuming queued (${email})`);
      resultPage(res, 200, 'Thank you', 'Your message has been sent.');
    }, 3500);
    child.on('close', code => {
      clearTimeout(timer);
      if (res.writableEnded) return;
      if (code === 0) {
        console.log(`contact: sent${suspect ? ' [suspect]' : ''} (${email}${platforms.length ? ', ' + platforms.join('/') : ''})`);
        resultPage(res, 200, 'Thank you', 'Your message has been sent.');
      } else {
        console.error(`contact: sendmail exited ${code}: ${errOut.trim()}`);
        resultPage(res, 500, 'That didn’t work', 'The message could not be sent just now — please try again a little later.');
      }
    });
    child.on('error', err => {
      clearTimeout(timer);
      if (res.writableEnded) return;
      console.error(`contact: sendmail spawn failed: ${err.message}`);
      resultPage(res, 500, 'That didn’t work', 'The message could not be sent just now — please try again a little later.');
    });
    child.stdin.end(mail);
  });
}

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.dmg': 'application/octet-stream',
  '.msi': 'application/octet-stream',
  '.AppImage': 'application/octet-stream',
};

// Serve one file from one root, with the traversal guard the whole
// arrangement rests on. `extraHeaders` is how the gated half asks for
// no-store: a cached page from behind a door outlives the door.
function serveFrom(root, urlPath, req, res, extraHeaders = {}) {
  let filePath = path.normalize(path.join(root, urlPath));
  if (filePath !== root && !filePath.startsWith(root + path.sep)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    fs.stat(filePath, (err2, stat2) => {
      if (err2 || !stat2.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', ...extraHeaders });
        res.end('<!doctype html><h1>404 — nothing grows here</h1>');
        return;
      }
      const type = TYPES[path.extname(filePath)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat2.size, ...extraHeaders });
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(filePath).pipe(res);
    });
  });
}

function sendHtml(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    // The raw token rides in /enter's query string; it must not leak
    // onward in a Referer to anything the page later fetches.
    'Referrer-Policy': 'no-referrer',
    ...headers,
  });
  res.end(body);
}

// ------------------------------------------------------------- the margin

// The relay Nginx's `location /engine/` was going to be: strip the prefix,
// name the caller, and pass the request to the process holding the key.
//
// THE OUTGOING REQUEST IS BUILT FROM SCRATCH, never forwarded wholesale —
// the same discipline the proxy itself keeps about what it sends Anthropic,
// and here it is what makes `x-phloem-user` trustworthy. The proxy believes
// that header because only this process can reach it; a client sending its
// own copy must therefore be unable to have it forwarded, and the only way
// to be sure of that is to name every header that goes.
async function relayToEngine(req, res, user, rest) {
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > MAX_ENGINE_BODY) {
      res.writeHead(413, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify({ error: 'request too large' }));
      req.destroy();
      return;
    }
    chunks.push(c);
  }
  const body = Buffer.concat(chunks);

  try {
    const upstream = await fetch(ENGINE + rest, {
      method: req.method,
      headers: {
        'content-type': req.headers['content-type'] ?? 'application/json',
        'x-phloem-user': user,
      },
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
      signal: AbortSignal.timeout(ENGINE_TIMEOUT_MS),
    });
    const text = await upstream.text();
    res.writeHead(upstream.status, {
      'Content-Type': upstream.headers.get('content-type') ?? 'application/json',
      'Content-Length': Buffer.byteLength(text),
      'Cache-Control': 'no-store',
    });
    res.end(text);
  } catch (err) {
    // The margin treats a failed call as a SLEEPING engine rather than an
    // error — an absent voice is not a failure — so the honest thing to
    // return is a plain refusal it already knows how to be quiet about.
    // Logged here, because a margin that goes quiet on the box for a week
    // must leave a trace somewhere a person can read.
    console.error(`engine: relay failed (${user}): ${err.name}: ${err.message}`);
    res.writeHead(502, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ error: 'the margin could not be reached' }));
  }
}

// --------------------------------------------------------------- the server

const server = http.createServer(async (req, res) => {
  let url;
  try {
    url = new URL(req.url, 'http://localhost');
  } catch {
    res.writeHead(400); res.end('Bad request'); return;
  }
  let urlPath;
  try {
    urlPath = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400); res.end('Bad request'); return;
  }

  // ---- public: the letterbox
  if (req.method === 'POST' && urlPath === '/contact') { handleContact(req, res); return; }

  // ---- public: the outside of the door
  if (urlPath === '/welcome') { sendHtml(res, 200, WELCOME); return; }

  // ---- public, because it IS the credential: a link being opened
  if (urlPath === '/enter') {
    if (!DOOR) { sendHtml(res, 503, WELCOME); return; }
    const token = url.searchParams.get('t');
    if (!token) { sendHtml(res, 401, WELCOME); return; }
    const cookie = await honour(token);
    if (!cookie) { sendHtml(res, 401, EXPIRED); return; }
    // REDIRECT, and redirect rather than render, for one reason: the raw
    // token is in this URL. A 302 to a clean path gets it out of the
    // address bar, out of the history entry the writer keeps, and out of
    // anything they might later copy to somebody.
    res.writeHead(302, {
      location: LANDING,
      'set-cookie': cookie,
      'cache-control': 'no-store',
      'referrer-policy': 'no-referrer',
    });
    res.end();
    return;
  }

  // ---- gated: the app, and the margin
  const gated = urlPath === '/write' || urlPath.startsWith('/write/') || urlPath.startsWith('/engine/');
  if (gated) {
    const session = DOOR ? await sessionFor(req) : null;
    if (!session) {
      // What `error_page 401 = /welcome` did. A page navigation gets the
      // page; the margin gets JSON, because engine.ts is parsing a reply
      // and an HTML welcome page arriving where a note should be is the
      // silent-failure shape this whole stack is careful about.
      if (urlPath.startsWith('/engine/')) {
        res.writeHead(401, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({ error: 'not signed in' }));
        return;
      }
      sendHtml(res, 401, WELCOME);
      return;
    }

    if (urlPath.startsWith('/engine/')) {
      // Strip the prefix, as `proxy_pass http://127.0.0.1:8787/` did.
      await relayToEngine(req, res, session.user, urlPath.slice('/engine'.length));
      return;
    }

    // The app. A trailing-slash redirect first, so relative asset paths in
    // index.html resolve against /write/ and not against the site root.
    if (urlPath === '/write') {
      res.writeHead(302, { location: '/write/', 'cache-control': 'no-store' });
      res.end();
      return;
    }
    serveFrom(WRITE_ROOT, urlPath.slice('/write'.length), req, res, {
      // A writer's session is private and the app is behind a door; a
      // cached copy in a shared browser would outlive the credential.
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
      'X-Robots-Tag': 'noindex, nofollow',
    });
    return;
  }

  // ---- public: the site
  serveFrom(ROOT, urlPath, req, res);
});

// The ledger is read once at boot and re-read on change (store.mjs watches
// its mtime), so a revoke made by the CLI takes effect within a second
// without restarting this process.
await loadLedger();

server.listen(PORT, () => {
  console.log(
    `phloem-site serving ${ROOT} on :${PORT}` +
      (DOOR ? ` · door open, app at /write/, margin relayed to ${ENGINE}` : ' · door CLOSED')
  );
});
