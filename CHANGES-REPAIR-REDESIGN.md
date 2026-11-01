# NEON DIGITAL PK: Nothing-inspired redesign, new identity, fixes

## Identity
- Brand name is now **NEON DIGITAL PK** everywhere (header, footer, metadata, titles, structured data, WhatsApp messages, policies and FAQ text). Email, phone and domain are unchanged.
- The circular gold "N" is gone. New symbol: a 7 x 7 matrix of square pixels with a lit emerald "play" triangle and one lime pixel at its tip (`NeonMark` in `src/components/Branding.tsx`, drawn as plain SVG, colours from CSS variables). Wordmark: NEON DIGITAL with a bordered "PK" tag.
- Assets (public/): favicon.png, apple-touch-icon.png, logo-512.png, logo-symbol.svg, logo-lockup-dark.png, logo-lockup-light.png, og-image.png. The older blue "NEON DIGITAL PK" badge stays in `src/assets/legacy/` for reference only.

## Design system
- Graphite and emerald (exact palette from the brief), thin borders, mono labels, structured grid, Space Grotesk / Inter / JetBrains Mono (Google Fonts when online, system fallbacks offline).
- Dark: #101412 page, emerald actions, white text. Light: #F5F7F5 page, white cards, emerald #087C58 buttons. Text links in Light use #076B4C (slightly deeper emerald) to keep contrast at 4.5:1 or better.
- Lime #C6F36B only on the "Most popular" badge, the logo tip, the dark-theme focus ring, the scroll-progress end and the hover ring.
- Obsolete burgundy, crimson, gold, wine and beige colours were removed from the stylesheet, markup, logo, favicon and social image (a test scans for them). Hero marble artwork and the footer glow disc were removed.

## Motion (restored, restrained, reduced-motion aware)
- Page background: slow emerald light drifting, fine dot texture, one thin vertical line sweeping across; scroll parallax and a thin progress line where supported.
- Hero: emerald glow, dotted matrix texture, two slow light beams, fine scan lines (pause while the hero is off screen).
- Cards: dotted corner texture, border light-up on hover; rate-card rows get an emerald edge on hover; steps draw their hairline; slow staggered scroll reveals; intro loader with the new symbol.
- Page changes: 140 ms fade-out then rise-in (same for back/forward); theme change: View Transitions circular reveal from the toggle (900 ms) with a colour-fade fallback.

## Fixes
- Wordmark clipping/old overrides, header overflow at 320 px (cursor menu moves to drawer/footer on small screens), payment tiles now monochrome, footer wordmark in Light, steps section rebuilt, order dialog first-frame state, rapid-navigation race, performance (blurred translucent header and card removed; frame rate in the test browser went from 25 to 61 fps).
- Layout audit over 16 pages x 2 themes x 5 widths (320, 390, 768, 1024, 1440): no horizontal overflow, no clipped or over-wide text.

## Notes
- Channels: unchanged (the original 19 owner-supplied names).
- Type-check used loose React stubs (no @types/react offline); there is no ESLint in this project.
