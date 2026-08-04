# Deploying henley.nz, and the Phloem pilot behind it

Two things live on this box: the public site, and a private trial of Phloem
at `/write/`. They are served by one Node process because the container's
nginx only knows about one — see "Why it looks like this" at the foot.

    /            the marketing site, from dist/          public
    /contact     the letterbox                           public
    /enter?t=…   a magic link landing                    public (it IS the credential)
    /welcome     the outside of the door                 public
    /write/…     Phloem itself                           gated
    /engine/…    the margin, relayed to the proxy        gated

## Two processes, two secrets

| process | holds | reached by |
|---|---|---|
| `app.js` (:3000) | `PHLOEM_DOOR_SECRET` | nginx |
| `proxy/server.mjs` (:8787, loopback) | the Anthropic key | `app.js` only |

`app.js` must hold the door secret: whatever verifies a signed cookie holds
the key that signed it. It must NOT hold the Anthropic key — a compromise of
the web server should not hand over the wallet. That is the whole reason the
proxy stays a separate process, and why it binds loopback and trusts the
`x-phloem-user` header it is sent.

## First-time setup on the container

Everything below is run as `phloem` over `ssh henley`. None of it needs sudo.

**1. The Anthropic key, in a file rather than a config.**

```
ssh henley 'mkdir -p /home/phloem/.phloem && chmod 700 /home/phloem/.phloem && cat > /home/phloem/.phloem/api-key && chmod 600 /home/phloem/.phloem/api-key'
```

Paste the key, then Ctrl-D. It is deliberately not an environment variable in
supervisord.conf: a config file is edited, backed up and read over shoulders;
a file whose only job is one secret can be 600 and left alone. This is also
where the desktop app keeps its key, so there is one convention, not two.

**2. The door secret.** Any 32+ random characters. It goes in supervisord's
environment because it is the one secret `app.js` genuinely needs:

```
head -c 48 /dev/urandom | base64
```

**3. Tell supervisord about the two processes.** `/container/config/supervisord.conf`
is owned by `phloem` and writable without sudo. Add ONE line to the existing
`[program:nodejs]` (keep everything else it has, including its
`environment=HOME=…`, which npm uses) and append the new stanza:

```ini
[program:nodejs]
environment=HOME=/container/application,PHLOEM_DOOR_SECRET="…the value from step 2…"
; …the rest of this stanza unchanged…

[program:phloem-proxy]
command=/usr/local/bin/node /container/application/proxy/server.mjs
environment=PHLOEM_ENGINE_MODEL="claude-haiku-4-5",PHLOEM_KEY_FILE="/home/phloem/.phloem/api-key"
user=phloem
stdout_logfile=/container/logs/supervisor/%(program_name)s-stdout.log
stderr_logfile=/container/logs/supervisor/%(program_name)s-stderr.log
```

Then:

```
ssh henley "supervisorctl -s unix:///container/system/run/supervisor.sock reread && supervisorctl -s unix:///container/system/run/supervisor.sock update"
```

**`phloem` AND `www-data` ARE THE SAME ACCOUNT** — checked 2026-08-04:
`getent passwd 33` returns `phloem`, and the name `www-data` does not resolve
at all on this box. So what you create over ssh is owned by the very uid the
server runs as, and there is no permissions maze: the key file, the invite
ledger and the proxy's meter all just work. The existing stanza says
`user=www-data` and has been running since July; the new one says
`user=phloem` because that is the name that certainly resolves, and it is the
same uid either way.

**The key path is absolute on purpose.** `HOME` for the site process is
`/container/application` — the git clone — and a secret must not live inside
a git clone that the deploy runs `chmod -R a+rX` over. `/home/phloem/.phloem/`
is outside it, mode 700, and named explicitly so nothing depends on which
`HOME` a process happened to inherit.

**MIND THE HOST PANEL.** supervisord.conf is provider-managed territory even
though it is writable. If the container is ever re-provisioned these two
stanzas go with it; they are the first thing to check when the margin has
gone quiet and nothing else explains it.

## Deploying a change

```bash
# 1. From the Mac
git add -A && git commit -m "…" && git push origin main

# 2. Pull and rebuild on the container (also fixes permissions)
ssh henley "cd /container/application && git pull && npm ci && npm run build && chmod -R a+rX ."

# 3. ONLY if app.js, door/ or proxy/ changed
ssh henley "supervisorctl -s unix:///container/system/run/supervisor.sock restart nodejs phloem-proxy"

# 4. Verify from outside — never from inside (curl localhost:3000 reports 000 even when healthy)
curl -sI https://henley.nz | head -3
curl -sI https://henley.nz/write/ | head -3     # expect 401 without a cookie
```

## Deploying the Phloem app itself

`write/` is the built Phloem bundle, and it is **committed to this repo**,
unlike `dist/`. It has to be: the container clones only phloem-site and has
no copy of the app's source to build from. Build it in the phloem repo and
copy it across:

```bash
npm run build:hosted --prefix ~/Projects/phloem/app
rm -rf ~/Projects/phloem-site/write
cp -R ~/Projects/phloem/app/dist-hosted ~/Projects/phloem-site/write
```

Two things that build carries which an ordinary one must not:

- `--base=/write/`, so every asset and font URL resolves under the path
  rather than at the site root.
- `VITE_ENGINE_PROXY=/engine`, which is what makes the app ship **no API
  key at all** and reach the margin through the proxy instead. The desktop
  build must never carry it; the branch drops out when it is unset, which
  is the point.

## Inviting, and taking it back

Run on the container, so the ledger lives beside the server that reads it:

```bash
ssh henley "cd /container/application && PHLOEM_BASE_URL=https://henley.nz node door/invite.mjs issue 'jane@school.nz'"
ssh henley "cd /container/application && node door/invite.mjs list"
ssh henley "cd /container/application && node door/invite.mjs revoke 'jane@school.nz'"
```

A revoke reaches live sessions within about a second — the cookie carries its
invite's id and the gate re-reads the ledger when its mtime changes. No
restart, and no waiting.

The link is printed once and never stored: the ledger keeps only its sha256.
Lose the line and the only remedy is to issue another.

## Why it looks like this

The pilot was designed around nginx doing the gating with `auth_request`,
`error_page 401 = /welcome`, and a `location /engine/` proxy_pass. **None of
that can be installed here.** This is a managed container: there is no sudo,
`/etc/nginx/sites-available/default` is owned by root, and it contains a
single `location /` pointing at port 3000. So `app.js` does those three jobs
instead. The boundaries are identical; only the thing enforcing them moved
inwards, and the nginx blocks that were written from documentation and never
run against a real nginx have stopped existing rather than needing to be
debugged.

**The 5-second ceiling.** nginx here sets `proxy_read_timeout 5s`, which
applies to every response this process gives. A margin call measured **3.1s**
on Haiku with the real structured-output request — under it, but not
comfortably, and Opus is slower. A support request to raise it to 60s was
sent on 4 August 2026. Until it lands, keep `PHLOEM_ENGINE_MODEL` on Haiku
and treat an occasional 504 in the margin as expected rather than mysterious.
If the host ever refuses, the fix that needs nobody's permission is to stream
the proxy's response so each chunk resets nginx's clock.

**TLS terminates at the host's edge**; this container sees plain HTTP. The
session cookie is still `Secure`, and correctly so — that flag instructs the
BROWSER, and the browser is on `https://henley.nz`. Nothing in this process
needs to know it sits behind a terminator, and nothing here may start gating
on `req.secure`.
