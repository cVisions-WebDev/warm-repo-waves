
# Mortgage Rockstar™ — Website Build Plan

A premium, education-first marketing site built around Matt Arana's personal brand. Six routes, fully on-brand (Black / Electric Blue / Neon Orange / White), bold typography, high-energy but professional. Built as a static React site that the WordPress team can later port — every page is a self-contained route with clean section markup, so handoff is straightforward.

---

## 1. Pages (each is its own route for SEO + clean WP handoff)

1. **Home (`/`)** — Hero, 4 brand pillars, About teaser, services snapshot, education/content teaser, testimonials, "Talk to Matt" CTA.
2. **About (`/about`)** — Matt's origin story (musician → GE Capital → mortgage), philosophy ("Show up, tell the truth, outwork expectations…"), mission/vision/values, "Powered by Cornerstone First".
3. **Loan Programs (`/services`)** — Conventional, Jumbo & Luxury, VA, Investor/DSCR, First-Time Buyer, Complex / Self-Employed Income. Each as a card with details.
4. **Education (`/education`)** — Content hub: Mortgage 101, Buyer Guidance, Market Insight, Wealth-Building, FAQs. Filterable article grid (placeholder posts).
5. **Success Stories (`/success-stories`)** — Client wins, case studies, testimonials with results.
6. **Contact / Apply (`/contact`)** — Hero CTA, contact form (placeholder, non-functional as requested), licensed-states info (MO, IL, FL +), schedule-a-call CTA, social links.

Shared header + footer in `__root.tsx`. Each route gets its own `head()` with unique title/description/OG tags.

## 2. Brand system (locked from the guide)

**Palette** (oklch tokens in `src/styles.css`):
- `--background`: near-black `#0A0A0B`
- `--foreground`: white
- `--primary`: Electric Blue `#1E6BFF`
- `--accent`: Neon Orange `#FF6A1F` (used sparingly for CTAs, highlights)
- `--muted`: deep charcoal
- `--card`: elevated dark surface

Dark-dominant theme with white "clarity" sections breaking up the page rhythm — matches the brand's "Black + Blue = authority, Orange = energy, White = clarity" formula.

**Typography**: Bold sans-serif display (e.g. Space Grotesk / Archivo Black for headlines) + clean sans for body (Inter). Tight tracking on headlines, generous body line-height.

**Motion**: Restrained, confident — subtle fade-up on scroll, magnetic CTAs, hover lift on cards. No fluff.

**Visual motif**: Thick orange accent rule, star/soundwave glyph as a brand mark, "Rockstar" callout chips, large stat callouts.

## 3. Voice & copy

All copy written in Mortgage Rockstar tone — confident, educational, motivational, never leads with rates. Uses signature lines from the tone doc ("Let's break this down simply.", "You have more options than you think.", "New Town, Old Vibe", "Powered by Cornerstone First"). CTAs are action-oriented ("Get Your Strategy Call", "Start with Clarity").

## 4. Imagery (placeholders, swap-ready)

Generated on-brand imagery for: Matt portrait (hero + about), lifestyle/business shots, abstract brand textures, success-story portraits. All saved to `src/assets/` so the WP team can swap in real photos later by replacing files.

## 5. Forms / functionality

- Contact form is **visual-only** (no backend), as requested. Submit button shows a "Thanks — we'll be in touch" inline confirmation. Easy to wire to a backend or Gravity Forms later.
- No auth, no database, no payments.

## 6. SEO & handoff readiness

- Per-route `<title>`, meta description, OG/Twitter tags.
- Semantic HTML (`<header> <main> <section> <article> <footer>`), single H1 per page, alt text on every image.
- JSON-LD `LocalBusiness` / `Person` schema on Home + About.
- Clean section structure so WordPress conversion is a 1:1 mapping (each section → WP block/ACF group).

## 7. Out of scope (flag for client confirmation later)

- Real CMS / blog backend (placeholder articles only).
- Live application/CRM integration.
- Real Matt photography, logo file, video assets.
- WordPress theme conversion itself.

## 8. Build order

1. Brand tokens + typography in `src/styles.css`.
2. Shared layout: Header (sticky, dark, orange CTA), Footer (brand mark, nav, licensed states, social, "Powered by Cornerstone First").
3. Home page (sets the visual bar).
4. About → Services → Education → Success Stories → Contact.
5. Generate placeholder imagery.
6. QA: per-route metadata, contrast, mobile responsiveness, link integrity.

---

Once you approve, I'll build it end-to-end. If you'd rather I start with just the Home page so you can review the visual direction before I build the other five, say the word.
