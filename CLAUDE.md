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
- The site header lives in `assets/Layout-*.js` (function `U`, exported as `H` and also used by the
  homepage via `storefront-sections-*.js`). Its styles are the `.glh-*` rules appended to
  `assets/styles-*.css` (the Tailwind CSS is precompiled, so new utility classes won't exist).
  After changing the header, regenerate the `<header class="glh">` markup in every `.html` page
  from the rendered page so hydration matches.
- `store.html`, `volume-pricing.html`, `coas.html`, `contact.html` are static (non-React) pages
  built from the `faq.html` shell with a copy of the header/footer plus a small inline script for
  the menu. They are not updated by the React bundles: if products or the header change, update
  these pages too (store cards come from the product catalog in `assets/index-*.js`).
