# PHD Bangladesh — Website Prototype

A world-class, donor-grade website prototype for **PHD (Program for Helpless and Lagged
Societies)**, a Bangladeshi development & humanitarian organisation. Built to stand alongside
the digital experiences of UNDP, UNICEF, BRAC, Save the Children and the ADB.

Design direction: **60% international NGO · 20% donor agency · 20% modern social-impact** —
clean, evidence-led, storytelling-driven, accessible.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` design tokens) |
| Fonts | Sora (display) + Inter (body) via `next/font` (self-hosted) |
| Rendering | Static generation (SSG) + client components for interactivity |
| Imagery | Premium CSS/SVG duotone placeholders — drop real photography in later |

## Run it

```bash
npm install      # already installed
npm run dev      # dev server  → http://localhost:3000
npm run build    # production build (all 24 routes prerender)
npm run start    # serve the production build
```

## What's included

**Pages / routes (all verified serving 200):**

- `/` — Home: hero, animated impact counters, mission/values, 8-program grid,
  interactive coverage map, impact dashboard, beneficiary stories, partner marquee, newsroom, CTA
- `/about` — history timeline, mission/vision/values, leadership, board, organogram, strategy, compliance
- `/what-we-do` + `/what-we-do/[slug]` — program index and 8 detailed program pages (SSG)
- `/projects` — searchable, multi-filter project directory (donor / sector / division / status + live portfolio totals)
- `/where-we-work` — interactive Bangladesh coverage map + division table + regional offices
- `/impact` — impact dashboard, sector bars, before/after, SDG alignment, climate tracker, stories
- `/knowledge` — digital annual reports, publications library, news, media gallery
- `/careers` — vacancies, internships, volunteering, talent pool
- `/get-involved` — donate, donor/partner wall, corporate CSR, procurement & tenders
- `/transparency` — financials & audit, policies & safeguarding, complaints mechanism
- `/contact` — offices, working enquiry form (client-side success state)
- `not-found` (404), `sitemap.xml`, `robots.txt`

**Design system:** `src/app/globals.css` (brand teal-green + gold + coral palette, spacing,
motion, utilities). UI primitives in `src/components/ui.tsx`; inline icon set in `icons.tsx`.

**Content layer:** typed mock datasets in `src/data/` (programs, projects, stories, partners,
publications, jobs, tenders, SDGs, map). Swap these for a headless CMS (Sanity / Strapi /
Payload) without touching the UI.

## Accessibility & SEO

Skip-link, semantic landmarks, visible focus rings, ARIA on nav/map, `prefers-reduced-motion`
support, breadcrumb navigation, per-page metadata, OpenGraph, sitemap and robots.

## Notes

- Photography is represented by branded duotone gradient blocks (`.duotone`) so the prototype
  is fully self-contained and never shows broken images. Replace with `next/image` + real assets.
- Forms, donate, search, downloads and language toggle are front-end stubs ready to wire to a backend.
