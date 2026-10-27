# Phase 8 report

Open `index.html` first. It is the complete website in one file.

## What was redesigned
- **One brand, two modes.** Original Neon (blue `#3046F0`, white, navy/black `#0B1020`) in Light (default) and Dark. Dark mode has its own surfaces (`#0A0F1E` page, `#131B33` surfaces, `#25304F` borders, lighter blue `#9AA8FF` for text accents) rather than an inversion; the brand blue is kept for buttons. All other themes were removed from styles, preferences, the selector, docs and tests.
- **Homepage.** The Phase 7 hero (order sheet over a large letter) was dropped. New first screen: a short headline ("Choose a plan. Order on WhatsApp."), the three ordering steps as a ruled list, and a printed-style **rate card** (Basic / Standard / Premium, library figures, 1-month price, hard blue offset shadow). It uses the real plan data and follows the PKR/USD switch. No orbs, beams, particles, floating shapes or looping animation in the hero; it reads the same with animation off. Below it: the moving channel bar, a numbered ledger, plans on a navy band, device and payment sections, a FAQ sheet.
- **Plans.** Replaced three plan cards with the supplied two-step layout: choose plan, choose duration, then one result panel (price, per-month, saving, order button) and the comparison table beneath.
- **Devices.** Rebuilt from the screenshots: five tabs, per-tab step list, app cards with real icons, badges and actions.
- **Providers.** A searchable ruled directory (logo, name, expandable details with a WhatsApp enquiry) instead of a grid of identical cards.
- **Other pages** (guides index and articles, FAQ, policies, contact, channels): ruled lists and reading sheets (`.nd-paper`) in both modes. About and How it works use the shared numbered/ruled patterns and were not given bespoke layouts.

## Features restored
The moving channel bar (two rows in opposite directions, names from `src/data/channels.ts`, seamless loop, hover and Pause button stop it, static hand-scrollable list with reduced motion, no page overflow), the full device guides, and the provider catalogue.

## Apps added (from the owner screenshots)
- Android Phone & Tablet: XCIPTV Player (Recommended, Free), Televizo (Free + Premium option), XP IPTV, Xtreme Master OTT Player.
- Android TV & Box: XCIPTV Player only (the screenshots show only the tab name; no phone-only app is presented as a TV app).
- Firestick: XCIPTV Player (Recommended, Free), XP IPTV, plus the "Confirm your Downloader code on WhatsApp first" banner.
- Samsung & LG: IBO Player (Recommended, Paid after trial), Hot Player (Paid after trial), plus the owner's "Good to know" notice.
- iPhone & iPad: the guided-setup card (contact us on WhatsApp).
Icons are crops from the screenshots. Store buttons are labelled web searches ("Find on Google Play", "Find official website") because official listing addresses could not be verified (search results named several different IBO Player sites). Fire TV apps use a Downloader code requested on WhatsApp. No server addresses, usernames or passwords appear anywhere.
**Not readable in the screenshots:** Firestick steps 3-4, Samsung/LG step 4, and any further Firestick app cards below the first two. Steps were written to match and are marked `inferred` in `src/data/deviceApps.ts`; no extra apps were invented.

## Provider reconciliation
The screenshot shows 23 names (Starshare, Opplex TV, GEO IPTV, Hexa TV, Strong 8K, B1G, Mega OTT, Fibrestream, Filex, Zum TV, Rolex TV, Bos TV, Lion OTT, Pop Live, HelloSky, Trex, Storm OTT, Plixi, Tale TV, 5G Live, Crystal OTT, Dino OTT, Rynex TV). The old list had 24 entries; 20 matched, and Crystal OTT, Dino OTT and Rynex TV were missing and are now added. Four old entries (Eagle 4K, Streambuzz 4K, ATV, SkyGlass) are not visible in the screenshot, which is scrolled and could hide a top row of four. They are kept, without logos, and flagged for the owner; set `listed: false` to hide them. Result: 27 entries, no duplicates, logos for the 23 supplied names (about 50 px crops, so slightly soft). No credentials, panel URLs, prices or partnership claims.

## Light / Dark mode
`src/lib/prefs.ts` stores `light` or `dark` under `nd_mode`. A fresh visitor, or any invalid value (including old theme ids), gets Light; the system colour setting is not used. A switch (`role="switch"`, labelled "Dark mode") sits in the header, the mobile menu and the footer; all read one store, so they stay in sync. `dev.html` applies the saved mode before the page paints.

## USD pricing (unchanged formula)
`ceil(PKR / 276.74) + surcharge` (Basic 0, Standard 1, Premium 2), whole dollars, in `src/data/currency.ts` only. Table: Basic $2 / $4 / $8 / $13, Standard $4 / $8 / $12 / $21, Premium $6 / $11 / $17 / $28. PKR prices unchanged. Per-month and saving figures derive from the displayed dollar prices. The rate is a dated reference (23 Oct 2026), shown as not live; a newer verified rate was not available, so none was invented.

## How the standalone `index.html` is built
`scripts/build-standalone.mjs` bundles `src/main.tsx` with esbuild (IIFE, no modules), inlines the CSS, script, logos and favicon into the template `dev.html`, and writes the root `index.html` (about 594 KB). It is rebuilt from the current source each time.

## Tests actually run (headless Chrome 131, against the root index.html): 180 checks, all passed
01 routes/layout/console in Light and Dark (5), 02 orders, links, navigation (31), 03 content interactions (25), 04 accessibility, motion, contrast in both modes (13), 05 pricing PKR and USD (15), 06 cursor effects, brand, contact (21), 07 entry point, hero, brand colours, confirmed wording (24), 08 providers, device apps, marquee, Light/Dark, removed theme (46). Also a partial TypeScript check with stubbed React types (clean), esbuild builds, and a direct `file://` test of the unzipped package (see below). The suite recomputes the expected USD prices from the rate in `currency.ts`.

## Not run / limits
- `npm install`, `npm run lint`, `npm run build` (Vite), `npm run dev`: no network here. `dev.html` as the Vite entry is untested with real Vite.
- Only Chrome; no Safari, Firefox, phones, screen readers or Lighthouse. Google Fonts could not load in the test sandbox, so screenshots used fallback fonts.
- The contrast test skips the navy bands, footer and hero-adjacent gradients; those were checked by eye.
- Provider and app details beyond names, badges and the supplied wording are not verified; logos' reuse rights are not verified.
- Remaining release checks: real Vite install/build/lint, refresh the exchange rate, confirm the four unlisted provider names, check inferred device steps, replace the logo if "Digital PK / IPTV" wording is unwanted, legal review.
