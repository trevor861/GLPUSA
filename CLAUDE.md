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
- Edited bundles were renamed with a `-g<hash>` suffix to bust browser caches. When you change an
  asset again, consider renaming it and replacing every reference (HTML, other bundles) the same way.
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

## Promo banner, cart drawer, sign-in (added Nov 2026)
- `winter40.js` (loaded on every page): WINTER40 banner under the header with canvas snow.
  Clicking the code stores `glpusa_promo_code=WINTER40` in localStorage and fires `glpusa:promo`.
  WINTER40 = 40% off every unit, not stacked with volume tiers (best of the two wins).
  Product pages, the volume invoice and the cart drawer all honor it.
- `cart.js` (loaded on every page): "Your draft invoice" slide-out drawer. Opens from the header
  cart icon (which links to `/volume-pricing#invoice` as a fallback) and after "Add to invoice".
  Items are localStorage `glp-bulk`. Its product catalog is generated: after products, prices or
  images change, run `python3 scripts/cart-catalog.py` (reads the cards in volume-pricing.html).
- Bump `?v=` on the `winter40.js` / `cart.js` script tags in every page when changing them.
- Sign-in (`assets/auth-*.js` + `auth.html`): one "Email or phone number" field, one-time code via
  Supabase `signInWithOtp` / `verifyOtp`. The backend is not connected yet (see the fetch shim in
  each page's head), so sign-in shows "Accounts aren't connected" until it is.
