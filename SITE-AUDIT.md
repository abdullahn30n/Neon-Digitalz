# Site audit and Stage 1 report

## 1. Initial audit of the supplied project
- **Stack:** Vite 8, React 19, TypeScript, Tailwind v4. Hash routing, 11 views, 8 data files, no `node_modules`, no lockfile.
- **Template leftovers:** unused server and AI-service dependencies and a `.env.example` for an AI key; an in-page "download this project ZIP" dialog.
- **Invented or unsupported claims found:** an uptime percentage, "15-minute activation", a "72-hour" review guarantee, support hours, "under 10 minutes" response time, service regions, a crypto payment option, a social link, channel and movie counts, simultaneous-connection counts and 4K entitlement per plan, a "25+ Mbps" requirement, and a 24-name list of third-party panel providers.
- **Contact details:** a placeholder phone number and an invented support email and domain.
- **Third-party names:** many websites, panel providers and player apps were named in data and docs.
- **Accessibility and structure:** navigation items were buttons rather than links, the mobile menu had no Escape or focus handling, the theme control was not a labelled group, and Tailwind class strings repeated heavily across views.

## 2. What changed in Stage 1
- **Design system** (`src/index.css`): Warm Nordic tokens for colour, type, spacing, radius, focus and containers; a designed dark theme (warm navy surfaces, lighter blue and coral accents), not an inversion.
- **Header:** logo, Home, Plans, Channels, Devices & Setup, Guides, FAQ, Contact, View Plans, and a Light/Dark/System radio group. Real links, active-page indicator, mobile drawer with focus trap, Escape, scroll lock. Reseller and Restream are hidden (`siteConfig.features`).
- **Home page:** hero with original SVG illustration, three differentiators that describe how ordering works, live pricing preview, how it works, devices, FAQ preview, final call to action. No reviews section (none approved), no channel categories (not authorised), no invented numbers.
- **Plans:** one data file; duration selector updates price, per-month figure, savings and the WhatsApp message. Per-month and savings figures are calculated, marked "about" when rounded.
- **Contact details:** WhatsApp 03198632860 (`923198632860`) from the owner's brief; email and payment list carried over from the owner's earlier site files (marked CONFIRM). No hours, regions, socials or domain.
- **Other pages** were rebuilt to the same system using only confirmed information: Channels (interim, ask on WhatsApp), Devices & Setup (generic guides, no app names or links), Guides (8 original articles), FAQ, Contact (WhatsApp hand-off, honest wording), About, How it works, and three policy pages.
- **Removed:** the ZIP download dialog, unused server and AI dependencies, the AI `.env.example`, `metadata.json`, the AI-template archive script, and the 24-name provider directory. The removed content is still in the original ZIP you supplied (backed up separately).

## 3. What was and was not tested
Tested in this stage, using the app bundled with esbuild and opened in headless Chromium (Tailwind was not available offline, and the new components use their own CSS, so Tailwind output was not exercised):
- Every route at 1366, 820, 390 and 320 px: no console or page errors, no horizontal overflow, one `h1` each, no empty pages.
- All 12 prices render exactly as approved; the order dialog's WhatsApp message changes with plan and duration; links use `923198632860`.
- Light, Dark and System themes, persistence, OS preference.
- Mobile menu open/close, Escape, focus return, navigation, and the nav items exactly as specified.
- Hidden reseller route falls back to Home; contact form validation; guide search and empty state.
- Computed text contrast across Home, Plans, Devices, Contact and Guides in both themes: no failures at WCAG AA thresholds.
- Type check with a loose React stub: no errors apart from stub noise.

**Not run:** `npm install`, `npm run lint`, `npm run build` and the Vite dev server (no npm registry access here). Treat the production build as unverified until you run it. Web fonts could not be loaded offline, so the fallback font was seen, not Plus Jakarta Sans. A screen reader and real phones were not tested.

## 4. Carry-over for Stages 2 and 3
- Plans page: full comparison once plan inclusions are supplied.
- Channels: real content only after rights are confirmed.
- Devices: confirmed device list and verified app names and links.
- FAQ, Guides and policies: owner review; refund terms are not yet specified.
- Reseller and Restream: build only if approved.
- SEO: canonical URLs, sitemap and per-page metadata need a confirmed domain and, ideally, static rendering.
