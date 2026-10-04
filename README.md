# WOLLOHY // Playground v0.1

A registry-driven home for browser-native games, generative instruments, audiovisual systems, and miscellaneous interactive artifacts.

The goal is intentionally boring under the hood: **one collection registry, one shell, as many toys as you want.**

## Open it

For the quickest local test, from this folder run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The shell can also be deployed as a static Vercel site with no build step.

## Add a toy

1. Put the HTML file in `toys/` (or use a live HTTPS URL).
2. Open `registry.js`.
3. Copy an existing object and change its fields.
4. Refresh.

That is it. Do **not** edit the card grid in `index.html`.

## Common adjustments

- Hide something: `enabled: false`
- Reorder: change `order`
- Feature it in START HERE: `featured: true`
- Change category filters: edit `tags`
- Force new-tab launch: `embed: false`
- Change its signal color: `accent: "cyan" | "magenta" | "yellow" | "green" | "white"`

## Why this is separate from the main personal site

The Playground is designed as a clean subpage, e.g. `/play/` or `/playground/`. The personal site can link to it as one primary section without inheriting every experiment's code or dependencies.

Later, the same `registry.js` can also power a small "selected interactive work" strip on the homepage so the personal site and the full Playground stay synchronized.

## Current objects

- HOL-001 (remote)
- Aetheria
- Vector Soup
- Cosmic Fluid
- Hyper-Soup
- Resonator Matrix
- Neon Pulse
- Generative Studio (remote)

These are intentionally presented as an archive/collection first. The next pass is not "add more." It is choosing the best 3–4 and polishing their actual interaction loops.