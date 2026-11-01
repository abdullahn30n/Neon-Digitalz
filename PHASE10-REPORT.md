# Phase 10 report: NEON DIGITAL in crimson, burgundy and gold

Open `index.html` first.

## Starting point (read this)
The Phase 9 ZIP and the reference image were not in my workspace. I continued from the latest project I had (the Phase 8 package). The visual direction comes from your written description and colour values; the artwork is original and was not copied from the image. If Phase 9 changed files, merge accordingly.

## Visual system
- **Palette** (in `src/index.css`): obsidian burgundy `#250403`, deep crimson `#650600`, blood red `#970900`, antique gold `#BD963D`, molten gold `#D8B655`, ivory `#F5E9C8`, dark wine `#3A0808`, charcoal `#171212`, bronze `#8F7138`. Crimson is used for actions and emphasis; gold for labels, prices, thin rules and highlights; body text is ivory (dark) or burgundy (light), never gold.
- **Dark mode (default):** `#250403` page, `#2D0505` and `#3A0808` surfaces, ivory text `#F5E9C8`, muted `#C9B79A`, bronze borders, gold links. Blood-red buttons carry a faint gold hairline.
- **Light mode:** warm ivory `#F7F1E1` page, warm-white `#FFFDF8` surfaces and header, burgundy `#250403` text, crimson links and buttons, borders `#E2D3AE`. The hero and plan bands stay dark in Light mode so the page keeps its cinematic character.
- **Hero:** a dark band with a calm text column and an original red-and-gold marble image (about 14 KB, generated with domain-warped noise) fading in from the right; a solid rate card (three plans, library figures, 1-month price) with one gold rule; no orbs, floating cards or looping animation. Artwork appears nowhere else.
- **Logo:** new SVG mark (gold N in a ring on dark wine), a matching favicon, apple-touch icon and 1200x630 social image. The earlier blue badge image was retired from the build (kept unused under `src/assets/legacy/`).
- Components restyled through tokens: plan picker, device guides, banner, provider directory, marquee, mode toggle, forms, footer.

## Brand-name corrections
"Neon Digitalz" was replaced by NEON DIGITAL in visible text, titles, Open Graph and Twitter metadata, the Organization schema, logo labels, WhatsApp and FAQ templates, the README and decisions files, scripts and tests. The email address `neondigitalz7@gmail.com` is unchanged (an address, not the brand). A test fails if the old spelling or the old blue palette values reappear in `src/` or the built `index.html`. Earlier reports in `docs/history/` keep their original text and now carry a "historical" banner.

## Features preserved (all re-tested)
Moving channel bar, plan and duration selection, PKR/USD switch and whole-dollar USD, WhatsApp order messages, device tabs and app cards, provider search (27 entries), FAQ, guides, policies, floating WhatsApp button, cursor effects, mobile menu, Light/Dark toggle (header, mobile menu, footer synchronised).

## Bugs found and fixed
- Leftovers from the blue theme: a blue `--nd-panel` token, a `nd-badge--blue` class name, a blue moon-icon rule and a navy shadow (all replaced).
- My own regular-expression edit produced an invalid button colour (`var(--nd-on-primary)FFF`), which made the light-mode header button text dark on crimson; found in a screenshot, fixed, and now covered by a test of the header button colour.
- The old logo image said "NEON DIGITAL PK" and was blue; replaced.

## Provider entries awaiting confirmation
Eagle 4K, Streambuzz 4K, ATV, SkyGlass.

## Inferred device instructions
Firestick steps 3 and 4 and Samsung/LG step 4 were written to match cut-off screenshots (marked `inferred` in `src/data/deviceApps.ts`); further Firestick app cards could not be read.

## Commands and tests actually run
- `node scripts/build-standalone.mjs` (rebuilds the root `index.html`, about 606 KB).
- Python/NumPy script for the marble, logo, favicon and social image.
- `npm install` and `npm ping`: attempted; there is no network access here, so nothing was installed. `npm run lint` and the Vite `npm run build` were therefore NOT run. A partial `tsc` check with stubbed React types was run (clean).
- Browser checks with Playwright and Chrome (both were available in this workspace) against the root `index.html`, run fresh in this phase: 184 checks, all passed: 01 routes/layout/console in Dark and Light (5), 02 orders/links/navigation (31), 03 content (25), 04 accessibility/motion/contrast in both modes (13), 05 pricing PKR and USD (15), 06 cursor effects, brand, contact (21), 07 entry point, hero, palette and brand (27), 08 providers, device apps, marquee, Dark/Light (47). Widths covered: 320, 360, 390, 768, 1024, 1280, 1440 (Dark at all, Light at 390, 768, 1280).
- A direct `file://` test of the unzipped package (see the delivery message).

## Remaining limitations
- Vite install, lint and build could not be run here; `dev.html` is untested with real Vite.
- Chrome only; no Safari, Firefox, phones or screen readers; fonts could not load in the test sandbox (fallback fonts were used in screenshots).
- The contrast test skips the dark bands (hero text column, plans band, footer); those were checked by eye.
- The artwork was not compared with your reference image.
- Operational claims (payments, support, catalogue, rights, providers, apps) are owner-supplied, not verified.


## Interactive upgrade pass (30 Oct 2026)

Added a focused interactive layer to the Phase 10 experience:
- Five perspective topic cards on the Channels page (Pakistani, Sports, Movies, News and Documentary). Cards track pointer position, tilt in 3D, scale on hover and open/scroll to their existing category panels.
- An interactive six-face symbol cube beside the existing home-page rate card. It supports pointer/touch dragging, bounded momentum, idle rotation and gentle hover nudging, with two orbit rings.
- A fine-pointer-only atom cursor with an immediate dot, eased ring, orbiting electron, interactive hover expansion and pressed state. Touch and reduced-motion users retain the native cursor.
- Theme transition timing updated to 0.9 seconds for the circular View Transitions reveal, with the existing CSS fallback retained.

Implementation note: the source React components were updated, and the standalone `index.html` was also patched with equivalent self-contained enhancements because dependency installation/build was unavailable in this environment. The original uploaded ZIP remains unchanged.

### Verification for this upgrade pass
- TypeScript/TSX transpile syntax checks: passed for all six changed React/TypeScript files.
- Standalone inline enhancement script syntax check: see packaging validation.
- Full Vite build, full TypeScript project check and Playwright browser tests: not run. `npm install` could not complete because the npm registry was unreachable (`EAI_AGAIN`). No claim is made that browser-level testing passed.
