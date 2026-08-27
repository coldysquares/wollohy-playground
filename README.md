# WOLLOHY // Playground

A registry-driven home for browser-native games, generative instruments, audiovisual systems, and miscellaneous interactive artifacts.

The operating rule is deliberately simple: **one collection registry, one shell, as many toys as you want.**

## Product idea

The Playground is not a single game and it is not the old GUVs taxonomy exposed to visitors. It is the public-facing place for small interactive systems that are fun to open, understand quickly, and play with.

GUVs remains the lab/archive. Playground is the curated surface.

## Editing contract

`registry.js` owns the collection. Add, hide, reorder, feature, tag, or relink an object there without rebuilding the shell.

A toy can be:

- a self-contained HTML file in `toys/`
- a live HTTPS URL
- a larger project that opens in a new tab

If Future You forgets the syntax, open `docs/ADDING_TOYS.md`. A starter file also lives at `toys/_template.html`.

Run `npm run validate` before publishing. The validator checks required fields, duplicate IDs, supported accents, URL shape, and missing enabled local files without adding any dependencies.

## Restoration status

### Live / curated

- **HOL-001** — flagship generative biosphere, currently linked to the proven GUVs deployment
- **Neon Pulse** — first focused restoration; local Playground build with pointer/touch/keyboard control, score/combo/integrity, local best score, optional track input, optional mic input, and audio-reactive density
- **Generative Studio** — retained as an archive/workbench object while the stronger individual ideas are separated out

### Queue

- Aetheria
- Vector Soup
- Cosmic Fluid
- Hyper-Soup

The rule remains: **polish existing concepts before adding new ones.**

## Design doctrine

The project follows **Graphic Web Utility**:

> PERSONALITY IN THE SHELL.  
> CLARITY IN THE TOOL.

See `DESIGN_LANGUAGE.md`.

Each toy is allowed to have its own identity. Playground provides orientation and curation, not a mandatory skin.

## Personal-site relationship

The main WOLLOHY site should orient. Playground should invite exploration. The personal site can show a few featured objects from this registry and link to the full collection once the Playground deployment has a stable public URL.
