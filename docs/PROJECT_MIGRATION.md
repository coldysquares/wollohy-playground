# Playground project migration

This file tracks the cleanup from fast-built experiments into standalone public projects.

## Public rule

A project is eligible for the public Playground only when it has its own canonical GitHub repository and its own stable production deployment. The Playground is a directory and presentation layer, not the canonical source of individual toys.

## Current state

| Project | Standalone repo | Production state | Cleanup state |
| --- | --- | --- | --- |
| Wiki Constellation | `coldysquares/wiki-constellation` | Vercel project exists; currently detached from Git | Repo normalized; reconnect production to standalone repo |
| Tabbycat | `coldysquares/tabbycat` | Vercel project exists; current production loader is pinned to an older commit | Repo is clean; replace pinned-loader production with direct canonical deployment |
| Slopscore Lab | `coldysquares/slopscore-lab` | Git-connected Vercel project | Structurally closest to target pattern; product audit still required |
| Saperli Popette | `coldysquares/saperli-popette` | Existing Vercel project is still connected to the old collection repo | Standalone repo is mature; migrate deployment ownership |
| Aster Graf | `coldysquares/aster-graf` | Vercel project exists; detached from Git | Standalone repo exists but still carries source-lineage scaffolding; audit before public promotion |
| Neon Pulse | none | Local file in Playground | Keep as internal/restoration toy until extracted or cut |
| Vector Soup | none | Local file in Playground | Keep as internal/restoration toy until extracted or cut |
| HOL-001 | none | Legacy hosted path | Decide whether it deserves extraction; do not feature as a canonical public project until then |
| Generative Studio | none | Legacy hosted path | Archive/workbench unless a specific idea earns extraction |

## Migration sequence

1. Normalize the standalone repository first.
2. Verify the app from that repository locally or in Preview.
3. Connect or create the Vercel project from the standalone repository.
4. Verify the Preview deployment before touching production.
5. Promote the verified deployment.
6. Update the Playground registry to the canonical production URL.
7. Only then retire obsolete deployments or embedded copies.

## Do not

- delete old projects before their unique contents are accounted for
- treat a working legacy URL as proof that its source is canonical
- feature a local file in Playground as if it were a standalone public project
- create permanent Vercel siblings for temporary probes when Preview deployments will do
- expose internal taxonomy as public product language
