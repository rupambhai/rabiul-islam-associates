# Rabiul Islam & Associates — Supreme Court Lawyer's Chamber

A premium, minimalist marketing website for a newly established Supreme Court
lawyer's chamber in Bangladesh. Built as a fast, accessible, SEO-ready single
page application with an editorial, boutique-firm aesthetic.

- **Stack:** React + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router + Lucide
- **Design:** ivory / charcoal / muted-bronze palette, Playfair Display + Inter typography, generous whitespace, sharp grid alignment
- **Theme:** light ("daylight") only — see [Theme](#theme)

---

## Getting started

### Prerequisites

- **Node.js 18+** (developed on Node 24)
- npm 9+

### Install & run

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
```

### Available scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                 |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`         |
| `npm run preview` | Preview the production build locally               |
| `npm run lint`    | Run ESLint across the project                      |

---

## Project structure

```
src/
├── components/        Reusable UI: Navbar, Footer, Seo, ScrollProgress,
│   │                  WhatsAppButton, PortraitPlaceholder, MapEmbed, …
│   ├── ui/            Primitives: Button, Container, SectionHeader
│   └── form/          Field wrapper + shared control styles
├── context/           ThemeContext (theme provider)
├── data/              Content as data: site, navigation, practiceAreas, chamber
├── hooks/             useTheme, useScrollPosition
├── layouts/           RootLayout (app shell)
├── pages/             Route components: Home, About, PracticeAreas,
│                      PracticeAreaDetail, Contact, NotFound
├── routes/            Router config (lazy-loaded routes)
├── sections/          Page sections: Hero, AboutPreview, PracticeAreasSection,
│                      WhyChooseSection, CtaSection, ConsultationForm, …
├── styles/            Global CSS + design tokens
└── utils/             cn (class merge), motion variants
```

### Content & customization

Almost all copy and contact details live in `src/data/` — edit these, not the
components:

- **`site.ts`** — chamber name, advocate name, phone, email, WhatsApp, address,
  Google Maps embed URL, office hours, social links, and canonical `url`.
- **`practiceAreas.ts`** — the five practice areas (slug, icon, copy, scope).
- **`chamber.ts`** — About-page biography, philosophy, credentials, stats, and
  the "Why choose this chamber" value propositions.
- **`navigation.ts`** — primary navigation items.

> Placeholders in **[square brackets]** (e.g. `[Full Name]`, `[BC-XXXX]`,
> `[Year]`) and the `+880 1XXX-XXXXXX` numbers are intended to be replaced with
> the chamber's real details before launch.

---

## Theme

The site is intentionally locked to the **light** palette. The theme system
(`ThemeContext`, `useTheme`, `ThemeToggle`) is kept in place but gated by a flag.
To re-enable dark mode:

1. In `src/context/ThemeContext.tsx`, set `THEME_SWITCHING_ENABLED = true`.
2. Re-add `<ThemeToggle />` to the desktop and mobile groups in
   `src/components/Navbar.tsx`.
3. Restore the pre-paint theme script in `index.html` (see git history) to avoid
   a flash of the wrong theme.

Dark-mode design tokens are already defined in `src/styles/index.css`.

---

## SEO

- Per-route `<title>`, meta description, canonical URL, Open Graph & Twitter
  cards via the `Seo` component (`src/components/Seo.tsx`).
- schema.org JSON-LD: `LegalService` (home/contact) and `Service` (practice
  area pages).
- `public/robots.txt` and `public/sitemap.xml` (URLs use the production domain
  `https://rabiul-demo.rupam.uk` — update when a permanent custom domain is set).
- `public/og-image.png` — 1200×630 social share image. Regenerate with
  `npm i --no-save sharp && node scripts/gen-og.mjs` after editing
  `scripts/gen-og.mjs`.

Set the production domain in **one place**: `site.url` in `src/data/site.ts`
(used for canonical and absolute OG URLs). Also update the absolute URLs in
`index.html`, `robots.txt`, and `sitemap.xml`.

---

## Accessibility

- Semantic landmarks, single `<h1>` per page, skip-to-content link.
- Keyboard-navigable, visible focus rings, accessible mobile menu
  (`aria-expanded` / `aria-controls`).
- Form fields use associated labels, `aria-required`, `aria-invalid`, and
  `aria-describedby` error linking.
- Colour palette meets WCAG AA contrast; `prefers-reduced-motion` is respected.

---

## Deployment

The app is a static SPA — any static host works. A history-API fallback (serve
`index.html` for unknown paths) is required so client routes deep-link correctly.

### Vercel

`vercel.json` is included (SPA rewrites + immutable asset caching).

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production
```

Or import the repo at [vercel.com/new](https://vercel.com/new) — framework
preset **Vite**, build `npm run build`, output `dist`.

### Netlify

`public/_redirects` is included (`/* /index.html 200`).

```bash
npm i -g netlify-cli
netlify deploy --build           # preview
netlify deploy --build --prod    # production
```

Or import the repo at Netlify with build command `npm run build` and publish
directory `dist`.

---

## License

Proprietary — prepared for the chamber. All rights reserved.
```
