# Owner decisions (current, Phase 10)

Order of authority: latest explicit instruction, then earlier confirmations, then project data, then public pages.

## In force
| Item | Decision | Where |
|---|---|---|
| Brand name | **NEON DIGITAL** (never "Neon Digitalz"). Domain stays https://neondigital.store/ | `siteConfig.ts`, `dev.html`, all pages |
| Palette | Obsidian burgundy `#250403`, deep crimson `#650600`, blood red `#970900`, antique gold `#BD963D`, molten gold `#D8B655`, warm ivory `#F5E9C8`, dark wine `#3A0808`, charcoal `#171212`, bronze `#8F7138` | `src/index.css` |
| Modes | Exactly two: **Dark** (default for a fresh visitor) and **Light**. Saved choice kept; missing or invalid falls back to Dark; the system setting is not used | `src/lib/prefs.ts`, `dev.html` |
| Artwork | Original abstract red-and-gold marble, used on the hero only. The owner's reference image was not available in the workspace, so the artwork follows the written description and palette | `src/assets/hero-marble.webp` |
| Logo | New original SVG mark (gold N in a ring on dark wine) replaces the earlier supplied badge image, which read "NEON DIGITAL PK" and used blue | `Branding.tsx`, `public/` |
| Email, WhatsApp | neondigitalz7@gmail.com, +92 3198632860 (the email address itself is unchanged; it is not the brand name) | `siteConfig.ts` |
| PKR prices | Basic 450 / 1,100 / 2,000 / 3,500; Standard 650 / 1,700 / 3,000 / 5,500; Premium 900 / 2,300 / 4,000 / 7,000 | `plans.ts` |
| USD | `ceil(PKR / 276.74) + surcharge` (Basic $0, Standard $1, Premium $2), whole dollars, dated reference rate (23 Oct 2026), not live | `currency.ts` |
| Business rules | Plan figures, support labels, 8 payment methods, worldwide intent, 24-hour trial from issue (max 3, manual), manual activation, refunds case by case: unchanged | |
| Deployment | not authorized | |

## Please decide
- **Eagle 4K, Streambuzz 4K, ATV, SkyGlass**: from the earlier project list, not visible in the scrolled provider screenshot. Still marked for confirmation (`listed: false` hides them).
- **Inferred device steps** (Firestick 3-4, Samsung/LG 4) and Firestick app cards not visible in the screenshot: marked `inferred` in `deviceApps.ts`.
- If you can send the reference image again, the artwork can be tuned to match it more closely.

## Superseded
"Neon Digitalz" as the brand name; the blue Original Neon identity and its Light-default; every earlier theme (Phases 5 to 8); USD prices with cents.


## Latest owner decisions (supersede earlier brand and colour decisions)
- Brand name NEON DIGITAL PK; the circular gold N is retired; new pixel-matrix symbol and wordmark.
- Visual direction: Nothing-inspired, graphite and emerald, monochrome, lime only as a small highlight.
- Channel list will be supplied by the owner later; no additions until then.
