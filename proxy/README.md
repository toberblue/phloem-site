# The margin's proxy

The one piece of Phloem that is a server, and it exists for exactly one
reason: a web writer cannot be handed a key.

On the desktop the engine reads `~/.phloem/api-key` and talks to Anthropic
from the writer's own machine. In a browser there is no such file, and
putting a key in the page would put it in anyone's devtools. So the hosted
build ships **no key at all** and the margin speaks through here.

```
node server.mjs        # reads the key from ~/.phloem/api-key, or $ANTHROPIC_API_KEY
curl localhost:8787/health
```

**What it is not: a general Anthropic relay.** It accepts exactly the one
request shape `engine.ts` sends, pins the model itself, caps `max_tokens`
itself, and refuses everything else. A proxy that forwards whatever it is
given is an open relay wearing a licence's clothes.

**The wallet is the asset.** No writer's work is stored on this box — every
garden lives in its owner's browser — so what is worth guarding is the bill.
Three independent brakes: a per-day count per credential, a monthly spend
ceiling for the whole house, and the daily caps `engine.ts` keeps in the page.

**And it never reads the writing.** Prompts and pages pass through and are
never logged, never persisted, never counted by content. What is written down
is arithmetic: who, when, how many tokens.

## Config

| variable | default |
|---|---|
| `PHLOEM_ENGINE_MODEL` | `claude-opus-4-8` — **the hosted pilot pins `claude-haiku-4-5`**, see `../DEPLOY.md` |
| `PHLOEM_KEY_FILE` | `~/.phloem/api-key` |
| `PHLOEM_MONTHLY_USD` | `50` |
| `PHLOEM_DAILY_CALLS` | `500` per credential |
| `PHLOEM_PROXY_PORT` | `8787`, bound to loopback |

**Loopback is load-bearing.** This process does no auth of its own and trusts
the `x-phloem-user` header it is sent, which is only safe because nothing but
`../app.js` can reach it. If it ever binds a public interface, that trust
becomes a hole. `app.js` builds the outgoing request from scratch for the same
reason — a client's own copy of that header must never be forwarded.

It used to sit behind an nginx `location /engine/`. It sits behind `app.js`'s
relay now, for the reasons in `../DEPLOY.md`; the binding and the reasoning
are unchanged.
