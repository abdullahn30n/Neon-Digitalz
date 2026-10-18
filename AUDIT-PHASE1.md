# Phase 1 audit and handoff

Date: 2026-10-18. Scope: audit plus safe fixes only. No redesign, backend, database, reviews, deployment, domain, or Terms & Conditions work.

## How to run
- **Just look at it (no install):** double-click `index.html` (the built site; Vite's source entry is now `dev.html`).
- **Develop:** `npm install` then `npm run dev` (http://localhost:3000).
- **Refresh the double-click version after editing code:** `npm run build:standalone`.
- Real entry point: `index.html` -> `src/main.tsx` -> `src/App.tsx` (hash router, `#/plans`, `#/faq`, ...). There is one HTML file by design; "pages" are hash routes.

## Map
- **Routes:** home, plans, channels, devices (+ `devices/<id>`), blog (+ `article-detail/<slug>`), faq, contact, about, how-it-works, policy/{privacy,terms,refunds}. `reseller` and `restream` are switched off in `src/data/siteConfig.ts` (`features`).
- **Navigation:** Home, Plans, Channels, Devices & Setup, Guides, FAQ, Contact, View Plans, theme switch. Footer: the same pages, About, three policies, WhatsApp, email.
- **Components:** Header (drawer with focus trap), Footer, ThemeToggle, PlanPicker, WhatsAppOrderModal, Icon, Branding (logo + hero art).
- **Assets:** none external. Logo and favicon are inline SVG. Only external request: Google Fonts (Plus Jakarta Sans) in `index.html`; the site falls back to system fonts offline.
- **Data:** `src/data/` (siteConfig, plans, devices, faqs, articles, policies).

## Fixed in this phase
1. **Contact form showed a false error.** `window.open(..., 'noopener')` always returns `null`, so after WhatsApp opened the form still said the browser blocked it. Fixed in `src/views/ContactView.tsx`. Verified: success note shown, no error.
2. **Guides page overflowed sideways on phones** (width 382 px at 320 and 360 px) because the topic filter was forced into the 4-column duration grid. Fixed with `.nd-seg--wrap` (`src/index.css`, `src/views/BlogView.tsx`). Verified: no overflow on any route at 320, 360, 390, 768, 1024, 1440.
3. **"How it works" page was unreachable** (no link anywhere). Added to the footer (`src/components/Footer.tsx`).
4. root `index.html` + `app.js` rebuilt from source (the shipped bundle matched source byte-for-byte before the fixes).

## Not reproduced
- **Missing footer logo and brand name:** the logo and "NEON DIGITAL" render in the footer in light and dark themes at 390 and 1280 px (via index.html). If you still see it missing, tell me which file, browser and screen, or send a screenshot.

## Remaining issues and decisions
- **Terms & Conditions already exist** (`#/policy/terms`, linked in the footer). I did not create or change them. Decide whether to hide them until Phase 2.
- **Channels page** is an interim "ask on WhatsApp" page. No foldable categories exist.
- **Reseller / Restream** are hidden and minimal (no directory, no restream page).
- **Plans** show prices only; `includes` is empty, so plan differences are not described.
- **Google Fonts** is a network dependency. `package.json` versions (Vite 8, TypeScript 7, plugin-react 6) are unverified here.
- **Not run:** `npm install`, `npm run lint`, `npm run build`, the Vite dev server (no registry access). Type check not run (no React type definitions offline).

## Catalogue findings (channels, providers, reseller, restream)
**Where the content exists.**
| Source | Channels | Provider names | Reseller / restream |
|---|---|---|---|
| Original plain-HTML site and its backup | none | none | a short reseller page: "packages shared when you enquire"; no restream |
| First rebuilt ZIP (`neon-digital-rebuilt__1_`) | 32 sample channel names | 24 names | directory plus restream pipeline text |
| Stage 1 (this project) | none | none | hidden, minimal |

**Provenance problem.** The 24 names and the 32 channels exist only in the first rebuilt ZIP. Its own header calls the provider list a "reference inventory based on public market audits", subject to owner approval. The same file contains made-up attributes (panel type, server tier, minimum credits) that nothing in your original site supports. So these are **not verified as things Neon Digital carries**, and none were added to the site.

**24 names found (reference only, unverified):** Eagle 4K, Starshare, B1G, Opplex TV, Mega OTT, GEO IPTV, Streambuzz 4K, Fibrestream, Filex, Zum TV, Rolex TV, Hexa TV, Bos TV, Lion OTT, Strong 8K, ATV, 5G Live, SkyGlass, Pop Live, HelloSky, Trex, Storm OTT, Plixi, Tale TV.

**Reference site comparison: not done.** I could not find an "Arsal Digital" site through search, so I have no list to compare against and no missing names to record. Send its URL (or paste/export its provider list) and I will compare it.

**Rights.** I cannot verify that any of these providers hold distribution rights for what they sell. Publishing their names on a public page implies Neon Digital works with them. Add a name only when you confirm you actually deal with that provider and are authorised to say so. No server URLs, credentials, prices or access details were added or recovered.

**Proposed channel categories (foldable, names only, no channels):** Pakistani, Indian, Sports, News, Movies, Kids & Family, Arabic, Turkish, UK/USA, Documentary, Regional. Not built yet.

**Plan differences.** The only verified difference between Basic, Standard and Premium is price. The first rebuilt ZIP listed connections (1/1/2), channel and movie counts, catch-up days and support levels, but those were drafted, not supplied by you, so they were not used.

## Next step needs from you
1. Screenshot or detail for the missing footer logo, if you still see it.
2. Arsal Digital URL or list.
3. Which providers you genuinely deal with, and whether you are authorised to name them.
4. What each plan includes, and the confirmed channel list.
5. Keep or hide the Terms page for now.
