# Deployment

Playground is intentionally static: `index.html`, `registry.js`, and self-contained files under `toys/`.

## Intended production setup

- GitHub source: `coldysquares/wollohy-playground`
- Vercel project: one project linked directly to this repository
- framework preset: Other / static
- root directory: repository root
- build command: none
- output directory: repository root

The repo already includes a small `vercel.json` for clean URLs and basic response headers.

## After the first stable production URL exists

1. Put that URL into the WOLLOHY personal-site PLAYGROUND destination.
2. Keep `guvs.vercel.app` as historical/source infrastructure rather than the public collection URL.
3. Do not manually duplicate the full registry inside the personal site. A few selected/featured links are enough.

## Pre-deploy check

Run:

```bash
npm run validate
```

That validation is also configured in GitHub Actions.
