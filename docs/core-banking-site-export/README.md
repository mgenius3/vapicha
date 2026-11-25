# Core banking website export (reference only)

These 14 files come from the core banking app's website (`frontend/pages/site/` in `Core-Banking-Operations-Suite (5).zip`, copied 2026-11-25). They were written for React Router, shadcn/ui and Tailwind, so they don't run in this Next.js site. They're excluded from type-checking in `tsconfig.json`.

They have been **ported into the live site** on the `site-pages` branch:

| Export file | Live version |
|---|---|
| `siteData.ts` | `app/site-content.ts` (company details changed to match the landing page; zip pricing, stats and testimonial dropped) |
| `policies.ts` | `app/policies.ts` (Inclusive Village Ltd, business@vapicha.africa; cookie policy rewritten for what the site actually uses) |
| `SiteLayout.tsx`, `ui.tsx` | `app/site-shell.tsx` (shared header, footer, page hero; no cookie banner) |
| `SiteSolutions.tsx` | `app/solutions/page.tsx` (pricing links to `/#pricing`) |
| `SiteProduct.tsx`, `screens/Shots.tsx` | `app/product/page.tsx`, `app/screens.tsx` (plain CSS, no recharts) |
| `SiteAbout.tsx` | `app/about/page.tsx` |
| `SiteCareers.tsx` | `app/careers/page.tsx`, `app/careers/roles.tsx` |
| `SiteContact.tsx` | `app/contact/page.tsx` (uses the existing `DemoForm`) |
| `SiteLegal.tsx` | `app/legal/[slug]/page.tsx` |
| `site.css` | not used; styles are in `app/pages.css`, matching the landing page |

Forms send through FormSubmit to business@vapicha.africa, like the landing page's demo form. The export's `website/submitWebsiteLead` backend isn't used.
