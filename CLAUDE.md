# GLPUSA site

Static prebuilt site (HTML + compiled JS/CSS in `assets/`), hosted on Vercel.

## Publishing edits (always do this)
- Live link: https://glpusa-trevor-8572.vercel.app (Vercel project `glpusa`, team `trevor-8572`).
- Vercel auto-deploys production from `main`. After every edit, commit and push to `main`
  (and the working branch if one is assigned) so the live link updates, then verify the
  live page shows the change.

## Editing notes
- Homepage content is rendered by React from `assets/storefront-sections-*.js` AND
  prerendered in `index.html`. Change both, or the edit flickers/reverts on hydration.
- After editing a JS bundle, syntax-check it: copy to a `.mjs` file and run `node --check`.
