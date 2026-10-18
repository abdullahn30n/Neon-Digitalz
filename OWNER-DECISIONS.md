# Owner decisions needed

1. **WhatsApp number**: set to 03198632860 (`923198632860`) from your brief. Confirm it is the business line.
2. **Email**: `neondigitalz7@gmail.com` was in your earlier website files. Confirm or replace.
3. **Payment methods**: JazzCash, EasyPaisa, Bank Transfer, Raast, Debit/Credit Card, SadaPay, NayaPay, International Transfer, from your earlier site. Confirm each, and have account details ready to share in chat.
4. **What each plan includes**: not supplied, so none is described. Add statements to `includes` in `src/data/plans.ts` once confirmed.
5. **"Most popular" or other plan label**: none shown. Set `badge` in `plans.ts` only if you approve one.
6. **Channels and content**: no list is published. Provide the channels and content you are authorised to advertise before any list or category section is added.
7. **Devices**: no device is marked Confirmed. Add ids to `confirmedDevices` in `src/data/devices.ts` after verifying each type, and supply verified app names and links.
8. **Reseller and Restream**: hidden. Confirm whether either is genuinely offered and approved before enabling `features.reseller` / `features.restream`.
9. **Support hours and response time**: none published. Provide verified values if you want them shown.
10. **Domain**: unknown, so no canonical URLs, sitemap or social image. Set `siteUrl` once known.
11. **Policies**: confirm legal business name, data retention, acceptable use, and the actual refund conditions (time limits, what qualifies, refund method).
12. **Reviews**: none shown. Add real, permitted reviews to `approvedReviews` in `siteConfig.ts`.

## Added in Phase 2
- **Channel topics are now shown** (ticker on the home page, foldable panels on Channels). They list kinds of content only, with an "ask us, availability varies" note. Turn off with `features.channelCategories = false` in `src/data/siteConfig.ts` if you would rather not show them until your channel list is confirmed.
