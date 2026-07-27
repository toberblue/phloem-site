// The container's nginx proxies everything to localhost:3000 (upstream "service",
// /etc/nginx/sites-available/default); supervisord keeps this process alive.
// Serves the Vite build output from dist/, reading per request so a redeploy
// of dist/ takes effect without a restart.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = path.join(import.meta.dirname, 'dist');
const PORT = 3000;
const CONTACT_TO = 'peter@henley.nz';
const SENDMAIL = '/usr/sbin/sendmail';

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
    const platforms = form.getAll('platform').filter(p => ['macOS', 'Windows', 'Linux'].includes(p));

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
      `Subject: ${headerSafe('Phloem site contact' + (platforms.length ? ` — test on ${platforms.join(', ')}` : ''))}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      `Name: ${name || '(not given)'}`,
      `Email: ${email}`,
      `Test platforms: ${platforms.length ? platforms.join(', ') : '(none ticked)'}`,
      `IP: ${ip}`,
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
        console.log(`contact: sent (${email}${platforms.length ? ', ' + platforms.join('/') : ''})`);
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

http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400); res.end('Bad request'); return;
  }
  if (req.method === 'POST' && urlPath === '/contact') { handleContact(req, res); return; }
  let filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    fs.stat(filePath, (err2, stat2) => {
      if (err2 || !stat2.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<!doctype html><h1>404 — nothing grows here</h1>');
        return;
      }
      const type = TYPES[path.extname(filePath)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat2.size });
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(filePath).pipe(res);
    });
  });
}).listen(PORT, () => {
  console.log(`phloem-site serving ${ROOT} on :${PORT}`);
});
