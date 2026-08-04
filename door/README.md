# The door

Who may come in, and nothing else. Phloem has no accounts and is not going to
grow any — a login screen inside the writing surface is the first brick of the
thing the constitution's fence exists to keep out — so the door stands outside
the app, and the app never learns anyone was asked.

| file | what it is |
|---|---|
| `session.mjs` | the crypto, the cookie, and the two pages a stranger may see. Imported by `../app.js`. |
| `store.mjs` | the invite ledger. Written **only** by the CLI; the server re-reads it on change. |
| `invite.mjs` | the gardener's end — issue a link, see who has one, take one back. |

```
node invite.mjs issue "jane@school.nz"     # prints the link ONCE
node invite.mjs list                       # unopened / in use / expired / revoked
node invite.mjs revoke "jane@school.nz"    # live sessions die within a second
```

**It was a separate process until 4 August 2026**, answering nginx's
`auth_request` subrequest. That design assumed an nginx we could write rules
into, and henley's is a managed container's: no sudo, root-owned config, one
`location /`. So the subrequest became a function call — `sessionFor(req)`,
same request, same process. Nothing about the credential changed. **The
`auth_request` / `error_page 401` / `location /engine/` blocks this README
used to carry are gone rather than merely wrong**: they were written from
documentation, never run against a real nginx, and are now unrunnable here.

Read `../DEPLOY.md` for how it is actually wired, including the one trap —
the node processes run as `www-data`, so `~` is not your home.

**It holds no Anthropic key and must not.** The proxy holds that and does no
auth; this holds the door secret and touches no inference. Two secrets, two
processes.
