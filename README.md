# Neon Digitalz website

**Open `index.html` first.** Double-click the `index.html` in this folder: it is the complete website in one file (script, styles, logo and icons are inside it). No server, Node.js or npm is needed to view it. It works from a `file://` address in a modern browser (tested in Chrome).

One brand identity, **Original Neon** (blue `#3046F0`, white and navy/black `#0B1020`), in two modes: **Light** (default) and **Dark**. The visitor's choice is saved; a missing or invalid saved value falls back to Light. The system colour setting is not used.

React 19, TypeScript, Vite and Tailwind CSS v4. Front end only: no backend, database, payment gateway or deployment config. Pages use hash routes (`#/plans`). Nothing is deployed.

## How `index.html` is made
`npm run build:standalone` bundles `src/` with esbuild and writes the root `index.html` (script and CSS inline, logos and icons embedded as data). Run it after any source change so `index.html` is not out of date. `dev.html` is the Vite source entry used for development only.

## Develop
Prerequisites: Node.js 20 or newer and npm.
```bash
npm install
npm run dev              # http://localhost:3000/dev.html
npm run lint             # tsc --noEmit
npm run build            # vite build, then dist/dev.html is renamed dist/index.html
npm run preview
npm run build:standalone # rebuilds the root index.html
```

## Edit
| What | File |
|---|---|
| Colours, Light and Dark tokens | `src/index.css` (`:root` = Light; `[data-theme="dark"]` = Dark) |
| Mode and cursor preferences | `src/lib/prefs.ts`, `src/components/Preferences.tsx` |
| Hero and home sections | `src/views/HomeView.tsx`, `src/components/HeroStage.tsx` |
| Moving channel bar | `src/components/ChannelShowcase.tsx` (names from `src/data/channels.ts`) |
| PKR prices, plan figures, descriptions | `src/data/plans.ts` |
| USD rate and formula | `src/data/currency.ts` (all price text comes from `quote()`) |
| Device tabs, apps, steps | `src/data/deviceApps.ts`, icons in `src/assets/apps/` |
| Provider catalogue | `src/data/providers.ts`, logos in `src/assets/providers/` |
| Brand, WhatsApp, email, payment methods | `src/data/siteConfig.ts` |
| Policies, FAQs, guides | `src/data/policies.ts`, `src/content/` |

## Browser checks (optional)
`npm run qa` runs eight check files in `qa/` against the root `index.html`. They need Playwright and Chrome, which are not project dependencies; set `PLAYWRIGHT_MODULE_DIR` and `CHROME_PATH` (see `qa/harness.mjs`). Each file takes under a minute.

## Documents
`PHASE8-REPORT.md` (what changed, tests, limits), `OWNER-DECISIONS.md`, `CONTENT-CHECKLIST.md`; older material in `docs/history/`; developer notes in `docs/START-HERE.html` (supporting material only).

## Known limitations
`npm install`, `npm run build` (Vite) and `npm run lint` were not run where this was packaged (no network); the `dev.html` entry is untested with real Vite. Only Chrome was tested. App and provider logos are small crops from the owner's screenshots. Operational claims (payments, support, catalogue, rights, provider and app details) are owner-supplied, not independently verified. USD uses a dated reference rate (1 USD = PKR 276.74, 23 Oct 2026), not a live feed.
