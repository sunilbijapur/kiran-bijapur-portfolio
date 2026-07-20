<<<<<<< HEAD
# Dr. Kiran Bijapur, MRSC — Research Portfolio

A fast, accessible, SEO-optimised static portfolio website for Dr. Kiran Bijapur, MRSC —
Materials Chemist, Green Hydrogen Researcher, and Researcher & Program Manager at the
Department of Science and Technology (DST), Government of India.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Fully static,
no backend required — deploys directly to GitHub Pages, Netlify, or Vercel.

---

## ⚠️ Before you publish — replace placeholder data

Several pages ship with **clearly-labelled sample/placeholder content** (a small notice
banner appears at the top of each) so the site has a complete, working layout out of the
box: **Publications, Patents, Awards, Projects, Teaching, Gallery, News, Timeline,
Testimonials, Media Coverage,** and the **CV / Research Statement / Publication List PDFs**
in `public/documents/`.

All of this content lives in typed, single-purpose files under `src/data/` — edit the
relevant file, save, and the site updates everywhere that data is used. No placeholder
claims (fake DOIs, patent numbers, citation counts, quotes, etc.) should be published as-is.

| Page | Data file |
|---|---|
| Publications | `src/data/publications.ts` |
| Patents | `src/data/patents.ts` |
| Awards | `src/data/awards.ts` |
| Projects & Grants | `src/data/projects.ts` |
| Teaching & Mentoring | `src/data/teaching.ts` |
| Research Gallery | `src/data/gallery.ts` |
| News | `src/data/news.ts` |
| Academic Timeline | `src/data/timeline.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Media Coverage | `src/data/media.ts` |
| Open Positions | `src/data/positions.ts` (starts empty) |
| Skills, Instrumentation, Memberships, FAQ, Collaborations | `src/data/*.ts` (same pattern) |
| Profile, bio, stats, socials, nav | `src/data/profile.ts`, `src/data/navigation.ts` |

**Photos:** the Research Gallery renders elegant category-tinted placeholder tiles until
real photos are added. Drop images into `public/images/<category>/...` and set the
`image` field in `src/data/gallery.ts` to a path *relative to `public/`* (e.g.
`images/lab/photo-01.jpg`, no leading slash) — the site resolves it correctly wherever
it's deployed.

**Documents:** `public/documents/` contains three auto-generated placeholder PDFs (CV,
Research Statement, Publication List). Replace them with your real files using the exact
same filenames, or update the paths in `src/pages/Downloads.tsx` and `src/pages/Home.tsx`.

---

## Getting started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # type-check and build the static site to /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

Requires Node.js 18+.

---

## Contact form — EmailJS setup

The Contact page (`src/pages/Contact.tsx`) uses [EmailJS](https://www.emailjs.com) to
send form submissions directly to **bijapursunil880@gmail.com** with no backend server.

**If you don't configure EmailJS, the form still works** — it falls back to opening a
pre-filled `mailto:` link in the visitor's email client, with a small notice explaining
this to the visitor.

To enable direct email delivery:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (Gmail, Outlook, etc.) and note its **Service ID**.
3. Create an **Email Template** with these variables: `from_name`, `from_email`,
   `institution`, `country`, `subject`, `message`, `to_email`. Note its **Template ID**.
4. Copy your **Public Key** from *Account → General*.
5. Copy `.env.example` to `.env` and fill in the three values:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. Restart the dev server / rebuild. `.env` is gitignored — for Netlify/Vercel, add the
   same three variables in your project's **Environment Variables** settings instead.

---

## Deployment

The production build in `/dist` is a fully static site — no server-side rendering, no
Node runtime needed at runtime. It uses React Router's `BrowserRouter` for clean,
SEO-friendly URLs (e.g. `/publications` rather than `/#/publications`).

### Netlify

1. Connect the repository (or drag-and-drop the `dist/` folder after `npm run build`).
2. Build command: `npm run build` · Publish directory: `dist`
3. `public/_redirects` (already included, copied to `dist/_redirects` on build) tells
   Netlify to serve `index.html` for any path, so client-side routing works on refresh
   and direct links. Nothing else to configure.

### Vercel

1. Import the repository. Vercel auto-detects Vite.
2. Build command: `npm run build` · Output directory: `dist`
3. `vercel.json` (already included) rewrites all paths to `index.html`. Nothing else to
   configure.

### GitHub Pages

GitHub Pages has no native support for client-side-routed SPAs, so this project includes
the standard **SPA-on-GitHub-Pages** fallback:

- `public/404.html` — GitHub Pages serves this for any unrecognised path (e.g. a direct
  link to `/publications`). It re-encodes the path into a query string and redirects to
  the site root.
- A small decode script in `index.html` restores the real path via
  `history.replaceState` before React Router mounts — the visitor never sees a flash or
  redirect loop.

**Two deployment styles:**

- **Custom domain, or a GitHub *user/organisation* site** (`username.github.io`) — served
  at the domain root. No changes needed; `base: '/'` in `vite.config.ts` and
  `pathSegmentsToKeep = 0` in `public/404.html` are already set correctly.
- **GitHub *project* site with no custom domain** (served at
  `https://username.github.io/repo-name/`) — you must:
  1. In `vite.config.ts`, set `base: '/repo-name/'`.
  2. In `public/404.html`, set `var pathSegmentsToKeep = 1;`.
  3. Rebuild (`npm run build`) before deploying.

Then either:
- Use the **gh-pages** package: `npm install -D gh-pages`, add a `"deploy": "gh-pages -d dist"`
  script, run `npm run build && npm run deploy`, and enable Pages on the `gh-pages` branch
  in the repo settings; or
- Use **GitHub Actions** to build and publish `dist/` on every push to `main` (Settings →
  Pages → Build and deployment → GitHub Actions, using the official
  `actions/deploy-pages` workflow).

---

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, ThemeToggle, Layout, ScrollToTop
    ui/         SEO, PageHero, SectionHeading, Reveal, StatCounter,
                Badge, Toast, EmptyState, HeroIllustration, SampleDataNote…
    cards/      PublicationCard, PatentCard, AwardCard, ProjectCard,
                TimelineItem, InstrumentCard, TestimonialCard, NewsCard,
                GalleryTile, FAQAccordionItem, SkillBar
  data/         Typed content files — the single source of truth per page
  lib/          asset() path helper for /public references
  pages/        One component per route (22 pages total)
  App.tsx       Route definitions
  main.tsx      Entry point (BrowserRouter, HelmetProvider)
  index.css     Design tokens, Tailwind layers, glassmorphism utilities
public/
  documents/    Placeholder CV / Research Statement / Publication List PDFs
  images/       Category folders for gallery photos
  404.html      GitHub Pages SPA fallback
  _redirects    Netlify SPA fallback
  robots.txt, sitemap.xml, site.webmanifest, favicon.svg
scripts/        One-off Python scripts that generated the placeholder
                PDFs and brand images (re-run only if you want to
                regenerate them)
```

---

## Design language

- **Palette:** deep navy, emerald green, gold accent, white/paper — a deliberately
  restrained academic palette (see `tailwind.config.ts` → `theme.extend.colors`).
- **Typography:** Newsreader (serif, display/headings) paired with Inter (body/UI) and
  IBM Plex Mono (data — DOIs, patent numbers, statistics, dates).
- **Signature motif:** a hand-built SVG of a hexagonal catalyst lattice with drifting
  H₂O / H₂ / O₂ molecules (`src/components/ui/HeroIllustration.tsx`) — a deliberate nod
  to the electrocatalysis and green-hydrogen research the site describes, used once on
  the homepage hero rather than as generic decoration.
- **Motion:** subtle scroll-reveals and animated counters via Framer Motion, all wrapped
  to respect `prefers-reduced-motion` (see `src/components/ui/Reveal.tsx`).
- **Dark mode:** class-based (`darkMode: 'class'`), toggled via the navbar button,
  persisted to `localStorage`, and applied synchronously in `index.html` before paint to
  avoid a flash of the wrong theme.

---

## Accessibility & performance notes

- Semantic landmarks, one `<h1>` per page, a "Skip to main content" link, and visible
  keyboard focus rings throughout.
- All interactive elements (nav dropdowns, accordions, tabs, toggle buttons) use proper
  ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-selected`, `aria-pressed`, etc.).
- Animations respect `prefers-reduced-motion` globally.
- Images use `loading="lazy"`; JS is code-split by route/vendor via Rollup manual chunks;
  fonts are preconnected and use `font-display: swap`.
- Run `npm run build && npm run preview`, then audit with Lighthouse in Chrome DevTools
  to verify scores in your specific hosting environment (network/CDN setup affects the
  final score more than the app code at this point).

---

## License

This codebase is provided for Dr. Kiran Bijapur's personal use. Replace all placeholder
content with verified information before publishing publicly.
=======
# kiran-bijapur-portfolio
kiran-bijapur-portfolio
>>>>>>> 1e27314a14ebb3c07b693d594d2df72946c9768b
