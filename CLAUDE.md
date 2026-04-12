# CLAUDE.md — Deen Karim Portfolio Site

## Project Summary

A professional portfolio website for Deen Karim, communications strategist based in Hamburg, Germany. The site supports an active job search. It is a positioning document in web form — not a design showcase.

**Live URL:** deen-karim.netlify.app (custom domain in progress — DNS propagating as of April 2026)
**GitHub:** github.com/langford-bc/portfolio (public)
**Netlify:** auto-deploys on every push to `main`

---

## Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings, serif) + Inter (body, sans)
- **Deployment:** Netlify — config in `netlify.toml` at repo root
- **Version control:** GitHub — `main` branch is production
- **Content:** Static — all content hardcoded. No CMS.
- **Dependencies:** Minimal. No animation libraries, no heavy UI frameworks beyond Tailwind.

### Netlify Configuration (`netlify.toml`)

```toml
[build]
  base = "portfolio"
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

The Next.js app lives in the `portfolio/` subdirectory. This config is required — without it Netlify cannot find the app.

---

## Design Direction

- Clean, minimal, typographic — content carries the weight
- Reference aesthetic: The Atlantic, editorial journalism sites, serious consultancy sites. Not a creative agency portfolio.
- No decorative elements that do not serve a functional purpose
- Strong typographic hierarchy — navigable by scanning
- Fully responsive — mobile-first, hamburger nav on small screens
- Fast loading — no heavy animations, no video autoplay

### Colour Palette

| Role | Value |
|---|---|
| Text (base) | `#1a1a1a` — warm near-black |
| Background | `#f8f6f2` — warm off-white |
| Accent | `#4a6fa5` — muted slate-blue |
| Surface (alt sections) | `#eeece8` — light warm grey |
| Muted text | `#6b6b6b` |
| Border | `#dddbd7` |

### Typography

- **Headings:** Playfair Display (serif) — editorial weight and authority
- **Body:** Inter (sans-serif) — clean, readable
- **Accents/labels:** Inter, uppercase, wide tracking, slate-blue

---

## Site Structure

Single-page site with smooth scroll navigation. No separate pages in v1.

### Navigation (sticky)

- Deen Karim (name/logo — scrolls to top)
- About
- Work
- Contact
- Collapses to hamburger on mobile

### Sections (in order)

1. Hero
2. About
3. The Core
4. Work (Selected Work)
5. Early Career (The Foundation)
6. Contact + Footer

---

## Section Content — Current Live State

### Section 1 — Hero

- **Name:** Deen Karim
- **Location label:** Hamburg, Germany
- **Title line:** Communications Strategist. Editorial Leader.
- **Sub-line:** I help companies in competitive and regulated sectors solve complex business challenges through editorial-quality content and brand strategy.
- **CTAs:** "View My Work" | "Get in Touch"
- **Photo:** `deen-karim-photo.jpg` — live

### Section 2 — About

- Full narrative bio
- Pull quote left column, bio right column (desktop)
- Three credentials: Columbia University MS Journalism | Rotman Executive MBA | IBM SkillsBuild AI Fundamentals

### Section 3 — The Core

- **Pull quote:** "I diagnose the business challenge first. Then I apply editorial discipline to solve it."
- Two-column body text
- Three principles: Diagnose first | Align internally | Deliver editorially

### Section 4 — Work (Selected Work)

Three cards, row on desktop, stacked on mobile.

| Card | Sector | Title | Image |
|---|---|---|---|
| IBM | Technology · Content Marketing | Helping IBM to inspire entrepreneurs | `work-ibm.jpg` |
| Perfood | Digital Health · Regulated Communications | Enhancing brand, product and scientific communication | `work-perfood.jpg` |
| CBC | Public Broadcasting · Journalism | At the center of national and international news | `work-cbc.jpg` |

### Section 5 — Early Career (The Foundation)

- Intro narrative (South Africa 1994 principle)
- Six engagements listed: South Africa 1994, Vickers and Benson, RBC Technology Ventures, XPV Capital, Ontario Power Generation, Baan World Users Group

### Section 6 — Contact + Footer

- Email: deen.karim@icloud.com
- LinkedIn: linkedin.com/in/editorial-creative
- Location: Hamburg, Germany · Available immediately
- Signature image: `s-karim.png` in footer

---

## Assets — All Live

| Asset | Filename | Status |
|---|---|---|
| Profile photo (Hero) | `deen-karim-photo.jpg` | Live |
| Signature | `s-karim.png` | Live |
| IBM work card | `work-ibm.jpg` | Live |
| Perfood work card | `work-perfood.jpg` | Live |
| CBC work card | `work-cbc.jpg` | Live |

All assets are in `portfolio/public/images/`. Raw source folders (cbc-photo/, ibm-photo/, etc.) are gitignored — kept local only.

---

## Repository Structure

```
portfolio-April-basic/          ← repo root
├── CLAUDE.md                   ← this file
├── .gitignore
├── netlify.toml                ← Netlify build config
└── portfolio/                  ← Next.js app
    ├── app/
    │   ├── components/
    │   │   ├── Nav.tsx
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Core.tsx
    │   │   ├── Work.tsx
    │   │   ├── EarlyCareer.tsx
    │   │   └── Contact.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── public/
        └── images/             ← all site images live here
```

---

## What Is Deferred to V2

Do not build these until the job search phase is complete and v1 is stable:

- Expanded case study pages with more detail
- German language version
- PDF resume download
- Blog / writing section
- Scroll animations or transitions
- CMS integration for content updates without code changes

---

## Voice & Tone

- Direct and confident — no hedging
- Specific and grounded — real names, real clients, real outcomes
- Human but professional — a person, not a corporate brochure
- Honest — plainspoken about complexity

---

## Development Process

### Principles

- Always plan before building. Do not write code without an agreed plan.
- Document decisions as they are made — not after.
- Use git to track every meaningful step. Commit early, commit often, with clear messages.
- Know what has been done and what is next at all times.

### Workflow for Each Phase

1. **Plan** — Agree on what will be built and how before touching code
2. **Document** — Update CLAUDE.md if the plan changes
3. **Build** — Implement only what was agreed
4. **Commit** — Commit completed work with a clear message
5. **Review** — Confirm output matches plan before moving on

### Git Conventions

- Commit after each meaningful, working unit of work
- Commit messages: plain English, present tense, specific
- Never commit broken or half-built code
- Push to `main` triggers automatic Netlify deploy — verify in dashboard

---

## Build Log

| Phase | Description | Status |
|---|---|---|
| 1 | Scaffold — git init, Next.js 16 + Tailwind v4, colour palette, fonts, assets | Complete |
| 2 | Navigation — sticky nav, hamburger mobile menu | Complete |
| 3 | Hero section — name, title, sub-line, CTAs, profile photo | Complete |
| 4 | About + The Core — bio, credentials, philosophy, principles | Complete |
| 5 | Work section — three cards with real images, case studies, outcomes | Complete |
| 6 | Early Career + Contact — engagement list, email, LinkedIn, signature | Complete |
| 7 | Copy edits — titles, wording changes across Core and Work sections | Complete |
| 8 | Deployment — Netlify config, GitHub push, repo made public | Complete |
| 9 | Responsive polish pass | Pending |
| 10 | Custom domain — DNS propagation in progress | In progress |
| — | Content tweaks — ongoing as copy is reviewed and refined | Ongoing |

---

## Source of Truth

The portfolio brief (`Deen_Karim_Portfolio_Brief.docx`) is kept **locally only** — it is gitignored and does not appear in the repository. All current live content is reflected in this CLAUDE.md.
