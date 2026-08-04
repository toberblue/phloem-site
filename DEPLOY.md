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

**1. The Anthropic key, in supervisord.conf — on THIS box, and reluctantly.**

The proxy prefers `$ANTHROPIC_API_KEY` and falls back to a key FILE, and the
file is the better arrangement everywhere it works: a config file gets edited,
backed up and read over shoulders, while a file whose only job is one secret
can be 600 and left alone. It is also where the desktop app keeps its key.

**It does not work here, and the reason is worth knowing before you try it
again** (learned 2026-08-04). Supervisord runs these processes as a uid that
is NOT the `phloem` you are when you ssh in. `/etc/passwd` here holds only
`phloem:x:33:33` and no `www-data` at all, yet supervisord accepts `www-data`
and rejects `phloem` — it has its own view. So a key file at mode 600 in your
home is unreadable by the process, and the proxy does what it is built to do:
refuse to start rather than run keyless, naming the path it looked in.

The clue was in the deploy line all along. `chmod -R a+rX .` exists precisely
because the web process can only read WORLD-READABLE files; if it shared your
uid that chmod would never have been needed.

The alternative to a config entry was chmod 644 on an API key, which is worse.
supervisord.conf is `rw-r-----`, and already holds the door secret. So:

```
ssh henley 'K=$(cat /home/phloem/.phloem/api-key); sed -i "s|^environment=PHLOEM_ENGINE_MODEL=.*|environment=PHLOEM_ENGINE_MODEL=\"claude-haiku-4-5\",ANTHROPIC_API_KEY=\"$K\"|" /container/config/supervisord.conf'
```

Keep a copy at `/home/phloem/.phloem/api-key` anyway — it is where you paste a
new key, and the command above reads from it, so the secret never passes
through a shell history or a clipboard.

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
environment=PHLOEM_ENGINE_MODEL="claude-haiku-4-5",ANTHROPIC_API_KEY="…"
user=www-data
stdout_logfile=/container/logs/supervisor/%(program_name)s-stdout.log
stderr_logfile=/container/logs/supervisor/%(program_name)s-stderr.log
```

(Leave `ANTHROPIC_API_KEY` empty here and fill it with the command in step 1,
so the key is never typed into a shell.)

Then:

```
ssh henley "supervisorctl -s unix:///container/system/run/supervisor.sock reread && supervisorctl -s unix:///container/system/run/supervisor.sock update"
```

**`phloem` AND `www-data` ARE THE SAME ACCOUNT, uid 33** — so what you create
over ssh is owned by the very uid the servers run as, and there is no
permissions maze: the key file, the invite ledger and the proxy's meter all
just work.

**ALWAYS WRITE `user=www-data` HERE, NEVER `user=phloem`** (learned the hard
way, 2026-08-04). The two names disagree depending on who is asking. In an
ssh shell `getent passwd 33` returns **phloem** and `www-data` does not
resolve at all — which is why `user=phloem` looked like the safe choice. But
SUPERVISORD sees the opposite, and refuses to even re-read its config:

    ERROR: CANT_REREAD: Invalid user name phloem in section 'program:phloem-proxy'

Supervisord's view is the one that decides, and it has been running `nodejs`
as `www-data` since July. Same uid either way, so nothing about file access
changes — only the name that must appear in this file.

**Never put a secret inside `/container/application`**, whatever else changes.
`HOME` for the site process points there, so it is the tempting place — and
the deploy runs `chmod -R a+rX` over the whole clone, which would make the
secret world-readable, and a stray `git add` would commit it.

**Two things this box will surprise you with, both found on 4 August 2026 and
both invisible until something refused to start:** supervisord's user names
and uids are not the ones your ssh shell sees, and `curl localhost` from
inside the container reports nothing even when a service is perfectly
healthy. Diagnose from the supervisor logs and from OUTSIDE the box; never
from a loopback curl inside it.

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
`error_page 401 = /welcome`, and a `location /engine/` proxy_pass. `app.js`
does those three jobs instead. The boundaries are identical; only the thing
enforcing them moved inwards, and the nginx blocks that were written from
documentation and never run against a real nginx have stopped existing
rather than needing to be debugged.

**THAT MOVE WAS MADE AGAINST A CONSTRAINT THAT WAS PARTLY WRONG**, and it is
recorded here so nobody re-derives the wrong reason. On 4 August the nginx
config was declared unchangeable — no sudo, `/etc/nginx/sites-available/default`
owned by root. **It is editable**, at `/container/config/nginx/sites-available/default`,
which is owned by `phloem` and is the *same inode* as the `/etc/nginx` path.
The host mounts it in. Change it and run
`supervisorctl -s unix:///container/system/run/supervisor.sock restart nginx`
— a few seconds of downtime. The mistake was inferring "no sudo" from the
server notes into "nginx cannot be configured", without checking.

**The design stands anyway, on reasons that do not depend on the mistake:**
one process instead of three, no `auth_request` subrequest on every static
asset, and the door has to serve `/enter` and `/welcome` from somewhere
regardless. But the `auth_request` route was available, and if this ever
wants revisiting, it is a real option and not a blocked one.

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
