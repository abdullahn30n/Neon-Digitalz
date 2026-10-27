# Owner decisions (current, Phase 8)

Order of authority: latest explicit instruction, then earlier confirmations, then project data, then public pages.

## In force
| Item | Decision | Where |
|---|---|---|
| Brand identity | One identity: **Original Neon, blue / white / black** (`#3046F0`, `#0B1020`, `#F5F7FF`, `#FFFFFF`, `#EAF0FF`, `#596174`, `#E3E7F0`, supporting green `#138675` used sparingly) | `src/index.css` |
| Appearance | **Light** (default) and **Dark**: two modes of the same brand, not two themes. Saved choice kept; missing or invalid falls back to Light; the system setting is not used | `src/lib/prefs.ts`, `dev.html` |
| Removed | Every earlier alternative theme (Phases 5 to 7): selector, palettes, preference ids and tests | |
| Brand name, email, WhatsApp | Neon Digitalz, neondigitalz7@gmail.com, +92 3198632860 | `siteConfig.ts` |
| PKR prices | Basic 450 / 1,100 / 2,000 / 3,500; Standard 650 / 1,700 / 3,000 / 5,500; Premium 900 / 2,300 / 4,000 / 7,000 | `plans.ts` |
| USD | `ceil(PKR / 276.74) + surcharge` (Basic $0, Standard $1, Premium $2), whole dollars, dated reference rate (23 Oct 2026), not live | `currency.ts` |
| Plan figures, support labels, 8 payment methods, worldwide intent, 24-hour trial from issue (max 3, manual) | unchanged | |
| Device apps and setup text | As shown in the supplied screenshots (see CONTENT-CHECKLIST.md) | `deviceApps.ts` |
| Provider catalogue | The 23 names visible in the supplied screenshot, plus 4 earlier-list names kept for confirmation | `providers.ts` |
| Plan picker | Two-step layout from the supplied pricing screenshot, in the brand colours; "Most popular" on Standard and "Lowest per month" on 1 year are as shown there | `PlanPicker.tsx` |
| Entry point | Root `index.html` (self-contained). `dev.html` is the developer entry | |
| Deployment | not authorized | |

## Please decide
- **Eagle 4K, Streambuzz 4K, ATV, SkyGlass**: in the project's earlier list but not visible in the scrolled provider screenshot (which may hide a top row). They are shown with a neutral initial. Set `listed: false` in `providers.ts` or remove them if they are not yours.
- **Firestick and Samsung/LG screenshots were cut off**: setup steps 3 and 4 (Firestick) and step 4 (Samsung/LG), and any Firestick app cards below the first two, could not be read. Steps were written to match and are marked as inferred in `deviceApps.ts`. Please check them.
- The logo reads "NEON DIGITAL PK, IPTV & STREAMING SOLUTIONS" while the brand is "Neon Digitalz".
- "M3U + Xtream Codes" was visible on the Standard plan only; it is shown on all plans.

## Superseded
The two-theme setup of Phase 7; the six-theme and Onyx setups of Phases 5 and 6; USD prices with cents.
