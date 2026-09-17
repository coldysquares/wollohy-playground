# WOLLOHY // Playground

A curated home for browser-native games, generative instruments, audiovisual systems, and small interactive artifacts.

The operating rule is deliberately simple: **one collection registry, one shell, a small number of toys worth showing.**

## Product idea

The Playground is not a single game and it is not an archive dump. It is the public-facing place for small interactive systems that are fun to open, understand quickly, and play with.

Internal experiments can stay messy elsewhere. Playground is the curated surface.

## Public eligibility gate

A project should only appear publicly in Playground when it has:

- its own canonical GitHub repository
- its own stable production deployment
- a clear public name and description
- a README that explains what it is and how it runs
- no dependency on an internal collection path as its canonical public identity
- a working experience that makes sense without local setup

Projects can be prototyped together internally, but public projects graduate into standalone repos before they are featured here.

## Editing contract

`registry.js` owns the collection. Add, hide, reorder, feature, tag, or relink an object there without rebuilding the shell.

The public registry should point to standalone production URLs. Local files under `toys/` are useful for restoration and development, but they are not considered finished public projects until they have been promoted into their own repositories.

If Future You forgets the syntax, open `docs/ADDING_TOYS.md`. A starter file also lives at `toys/_template.html`.

Run `npm run validate` before publishing. The validator checks required fields, duplicate IDs, supported accents, URL shape, and missing enabled local files without adding any dependencies.

## Current cleanup state

The collection is being normalized so that each public toy has one canonical repo and one production deployment. Existing embedded or legacy-hosted objects should be treated as migration candidates until that work is complete.

The rule is: **polish and separate existing concepts before adding new ones.**

## Design doctrine

The project follows **Graphic Web Utility**:

> PERSONALITY IN THE SHELL.  
> CLARITY IN THE TOOL.

See `DESIGN_LANGUAGE.md`.

Each toy is allowed to have its own identity. Playground provides orientation and curation, not a mandatory skin.

## Personal-site relationship

The main WOLLOHY site should orient. Playground should invite exploration. The personal site can show a few featured standalone projects and link to the full collection once the Playground deployment is using only canonical project URLs.
