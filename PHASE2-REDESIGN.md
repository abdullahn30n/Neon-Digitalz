# Phase 2: visual redesign

Date: 2026-10-18. Visual and motion work only. No backend, database, review system, deployment, domain or Terms work. No pages or working features were removed.

## Run
- **See it:** double-click `index.html`.
- **Develop:** `npm install`, `npm run dev`. **Refresh the double-click version:** `npm run build:standalone`.

## What changed
- **Theme:** LIGHT is the default. The OS setting is ignored (tested with the browser set to dark). One sun/moon button in the header (also on phones). Only a saved choice (`nd_theme`) changes the default. No slider, no "system" option. Switching animates in both directions: a circle grows from the button (View Transitions); other browsers cross-fade colours.
- **Brand:** new logo tile, solid navy with a light edge, plus the "NEON DIGITAL" wordmark. Larger and clearly visible in the header (light surface) and the footer (deep navy band).
- **Homepage:** cinematic hero (drifting colour orbs, sweeping light beams, scan lines, animated TV artwork with play rings, shimmering tiles and a progress bar), animated channel-topic ticker, numbered cards, tiered pricing, step timeline that draws itself, accordion FAQ, animated closing banner.
- **Pricing tiers:** Basic = light card, teal edge, dotted corner. Standard = navy gradient, coral glow, light sweep. Premium = near-black with a rotating gold/coral border and gold price. No "Most popular" label (not approved). Price figures re-animate when the duration changes.
- **Channels page:** 11 foldable topic panels (height animation, `aria-expanded`/`aria-controls`) and the original "ask on WhatsApp" box. Ticker topics link to their panel. Topics only: no channel names, counts or sports are listed.
- **Motion:** page entrance and exit (View Transitions, with a fade-out/fade-in fallback), scroll reveals, nav underline slide, button shine and press feedback, card lifts, menu icon morph, modal pop. Animated gradient glow on every inner page header.
- **Floating "Contact Us" button:** always visible, teal, subtle pulse, hover lift and press feedback. Label: "Contact Neon Digital on WhatsApp". Opens `https://wa.me/923198632860` with the message URL-encoded. It hides while the menu or order dialog is open and is a round 58 px button on phones, away from the menu button.
- **Fallbacks:** reduced motion turns every animation off (ticker becomes scrollable). If JavaScript is off, a notice shows the WhatsApp number and email (the site itself is a JavaScript app).

## Files changed
`index.html`, `src/index.css` (rewritten), `src/App.tsx`, `src/data/siteConfig.ts` (channel topics switched on), `src/components/{Branding,Footer,Header,Icon,PlanPicker,ThemeToggle}.tsx`, `src/views/{BlogView,ChannelsView,ContactView,HomeView}.tsx`, `index.html`, `app.js`.
New: `src/components/{ChannelTicker,FloatingWhatsApp,Foldable}.tsx`, `src/data/channelCategories.ts`, `src/hooks/useScrollReveal.ts`.

## Checks actually run (headless Chromium, built standalone site)
- Theme: default light with OS dark, toggle to dark and back, persistence after reload, View Transitions available, instant switch under reduced motion, CSS fallback when View Transitions are missing.
- Floating button: visible, label, URL and encoding, pulse running, visible at page bottom, round on 390 px, no overlap with the menu button, hides while the menu is open.
- Ticker moves, pause button stops it and sets `aria-pressed`, topic link opens the matching panel. Foldable panels open and close with animated height.
- Scroll reveals arm and complete. Reduced motion: 0 animated elements, nothing hidden.
- 3 tier styles present, 1-year prices 3,500 / 5,500 / 7,000, no "Most popular" text.
- Earlier suite re-run: header, footer and drawer navigation, order dialog (correct number and PKR text), contact validation, back/forward. 31 of 32 pass; the one failure is my test reading the WhatsApp tab URL in an offline sandbox, not a site bug.
- No horizontal overflow and exactly one h1 on 13 routes at 320, 360, 390, 768, 1024 and 1440 px (78 combinations). One overflow I introduced on the Devices page at 320 px was fixed.
- Contrast: 1,192 rendered text elements on 10 routes, light and dark, measured against sampled pixels: 0 below WCAG AA (4.5, or 3 for large text). Two real failures (hero and page eyebrow text) were fixed first. Text inside collapsed panels was not measured.
- Layout shift on load and scroll: 0.0000. No page errors in any run.

## Not done / could not check
- Not run: `npm install`, `lint`, `build`, type check (no registry access). Real Safari, Firefox, iOS and Android devices were not tested; only Chromium.
- View Transitions and the rotating Premium border use newer browser features. Where unsupported, you get the fade fallback and a static gold border.
- Fonts: Plus Jakarta Sans loads from Google Fonts. The sandbox is offline, so my screenshots used the fallback font; headings will look slightly narrower with the real font. Not measured.
- Frame rate reported 60 fps in a software-rendered sandbox, which is only indicative.
- Text in open panels and the order dialog was not included in the contrast sweep.
- I did not touch Terms, reseller, restream or provider names. `channelCategories` is now true in `siteConfig.ts` (topics only); set it to false to hide the ticker and keep the Channels page.
