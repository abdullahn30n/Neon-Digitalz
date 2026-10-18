# Neon Digital website (Stage 1 of 3)

React 19, TypeScript, Vite and Tailwind CSS v4, as in the project you supplied. This stage builds the design system, header, theme switch, footer and home page, and replaces content that was not supported by owner-provided facts.

## Just want to look at it?
Double-click **`index.html`**. It works without installing anything, and the same root folder can be published on GitHub Pages (Settings > Pages > Deploy from branch > `/ (root)`). `app.js` must stay next to it.

`dev.html` is the Vite source entry (used by `npm run dev`). After changing code, regenerate `index.html` and `app.js` with `npm run build:standalone`.

## Commands
```bash
npm install
npm run dev      # http://localhost:3000/dev.html
npm run lint     # tsc --noEmit
npm run build    # production build into dist/
```
These are the project's existing commands. **They have not been run in this stage** (see SITE-AUDIT.md, "What was and was not tested").

## Where to edit
| What | File |
| --- | --- |
| WhatsApp number, email, payment methods, feature switches, approved reviews | `src/data/siteConfig.ts` |
| Plans, prices, inclusions (all price maths) | `src/data/plans.ts` |
| Device guides | `src/data/devices.ts` |
| FAQ | `src/data/faqs.ts` |
| Guides (articles) | `src/data/articles.ts` |
| Policies | `src/data/policies.ts` |
| Colours, spacing, type, dark theme | `src/index.css` (tokens at the top) |

Placeholders and unconfirmed items are marked `CONFIRM` in the code and listed in OWNER-DECISIONS.md.

## Structure
```
src/
  App.tsx                 hash router, order dialog state, page titles
  index.css               design tokens, light and dark themes, components
  components/             Header, Footer, ThemeToggle, PlanPicker, WhatsAppOrderModal, Icon, Branding
  views/                  Home, Plans, Channels, Devices, Blog, FAQ, Contact, About, HowItWorks, Policy, Reseller (hidden)
  data/                   siteConfig, plans, devices, faqs, articles, policies
```
Routes use the URL hash (`#/plans`), so the site works on any static host.
