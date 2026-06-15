# Handoff — Rabiul Islam & Associates chamber website

_Last updated: 2026-06-15_

Premium marketing site for **Md. Rabiul Islam**, Advocate of the Supreme Court of
Bangladesh. Single-page React app (multi-route SPA), no backend.

## Stack

- **Vite 5** + **React 18** + **TypeScript** (`npm run build` = `tsc -b && vite build`)
- **Tailwind CSS 3**, **Framer Motion** (animation), **lucide-react** (icons)
- **react-router-dom 6** for routing
- Node pinned to **20** (`.nvmrc`)

## Commands

```bash
npm install      # one-time
npm run dev      # local dev server (Vite)
npm run build    # type-check + production build to dist/
npm run preview  # serve the built dist/ locally
npm run lint     # eslint
```

## Deployment

- Host: **Cloudflare Pages**, dashboard Git integration on GitHub repo
  `rupambhai/rabiul-islam-associates`, branch `main`, **auto-deploys on push**.
- Pages build settings: framework **Vite**, build command `npm run build`,
  output dir `dist`.
- SPA routing depends on `public/_redirects` (`/* /index.html 200`), which ships
  to `dist/` root. Keep it.
- This is a **static site**, not a Worker.
- `README.md` documents Vercel/Netlify and `vercel.json` exists, but the **chosen
  host is Cloudflare Pages**. Ignore the Vercel/Netlify references unless migrating.

### Live domain

- Temporary: **https://rabiul-demo.rupam.uk**
- Set in `src/data/site.ts` (`site.url`) plus absolute URLs in `index.html`,
  `public/robots.txt`, `public/sitemap.xml`. **Update all of these when a
  permanent custom domain lands.**

### Social share image

- `public/og-image.png` (1200×630).
- Regenerate: `npm i --no-save sharp && node scripts/gen-og.mjs`

## Project layout

```
src/
  data/         # Source of truth — edit content here, not in components
    site.ts        # name, contact, phones, whatsapp, email, address, social
    chamber.ts     # about copy, mission, stats, practice-area details
    practiceAreas.ts
    navigation.ts
  pages/        # Home, About, PracticeAreas, PracticeAreaDetail, Contact, NotFound
  sections/     # Home-page sections (Hero, AboutPreview, CTA, ConsultationForm, ...)
  components/   # Reusable UI (Navbar, Footer, Portrait, Seo, ui/, form/)
  context/      # ThemeContext (dark mode dormant — see below)
  layouts/      # RootLayout
  routes/       # Route table
  assets/       # rabiul-islam.jpg (advocate portrait)
public/         # _redirects, favicon.svg, og-image.png, robots.txt, sitemap.xml
scripts/        # gen-og.mjs (OG image generator)
```

**Content lives in `src/data/`** — change copy/contact details there and every
surface (footer, contact page, schema markup) stays in sync.

## Open / outstanding items

1. **Verify the latest Cloudflare redeploy went live.** At last handoff the live
   site was still serving a previous deploy (`og-image.png` returned the HTML
   fallback; removed `og-image.svg` still resolved). Check the Pages build log if
   it didn't self-complete.
2. **Contact form is not wired to a backend.** `src/sections/ConsultationForm.tsx`
   `handleSubmit` just waits 700ms and shows success — it sends nothing. Wire it
   to a form service (Formspree/FormSubmit/Cloudflare Worker/email) before relying
   on it, or it silently drops enquiries.
3. **Placeholder stats** in `src/data/chamber.ts` (`about.stats`): `[10]+` years
   and `[150]+` matters — confirm real figures or remove. The `[ ]` brackets are
   intentional placeholder markers.
4. **Footer social links** are `#` placeholders (`src/data/site.ts` `social`:
   LinkedIn, Facebook, X). Add real URLs or remove.
5. **Permanent custom domain** still to be added (currently temporary
   rabiul-demo.rupam.uk) — remember to update the URL in the 4 places listed above.

## Good to know

- **Dark mode is intentionally disabled** (light-only) via
  `THEME_SWITCHING_ENABLED = false` in `src/context/ThemeContext.tsx`. The toggle
  infrastructure is kept dormant for easy re-enable — flip the flag.
- Real chamber details, portrait photo, and credentials are already in place.
- Working tree was clean and feature-complete (Phases 1–5) at handoff.

## Contact details currently on the site (`src/data/site.ts`)

- Phones: 01842 856661 (primary), 01733 966943
- WhatsApp: 01842 856661 → https://wa.me/8801842856661
- Email: rabiuly@gmail.com
- Address: Chamber 604, Annex Extension Building, Supreme Court Bar Bhaban,
  Dhaka 1000, Bangladesh
- Office hours: Saturday–Thursday, 9:00 AM – 9:00 PM
