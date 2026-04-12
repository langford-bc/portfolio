# CLAUDE.md — Deen Karim Portfolio Site

## Project Summary

A professional portfolio website for Deen Karim, communications strategist based in Hamburg, Germany. The site supports an active job search. It is a positioning document in web form — not a design showcase.

Live URL (target): deen-karim.netlify.app

---

## Technical Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Netlify
- **Version control:** GitHub
- **Content:** Static — all content hardcoded from the brief for v1. No CMS.
- **Dependencies:** Keep minimal. No animation libraries, no heavy UI frameworks beyond Tailwind.

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

### Typography

Editorial hierarchy. Serif or high-quality sans-serif for headings. Clean body text. Let the type do the work.

---

## Site Structure

Single-page site with smooth scroll navigation. No separate pages in v1.

### Navigation (sticky)

- Deen Karim (logo/name — scrolls to top)
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
6. Contact

---

## Section Content

### Section 1 — Hero

- **Name:** Deen Karim
- **Title line:** Communications Strategist. Editorial Leader. Hamburg.
- **Sub-line:** I help companies in competitive and regulated sectors solve complex business challenges through editorial-quality content and brand strategy.
- **CTAs:** "View My Work" (scrolls to Work) | "Get in Touch" (scrolls to Contact)
- **Layout:** Full-width, left-aligned text, professional photo right side (portrait)
- **Photo:** `deen-karim-photo.jpg` — placeholder until supplied

---

### Section 2 — About

- **Heading:** About
- **Body:** Full narrative bio (Columbia MS Journalism, Rotman Executive MBA, 20+ years, IBM/KPMG/Suncor/Norton Rose/Perfood, applied AI competency, based Hamburg since 2018, English full professional, German intermediate)
- **Credentials row (3 items):**
  - Columbia University — MS Journalism
  - Rotman School of Management — Executive MBA
  - IBM SkillsBuild — AI Fundamentals
- **Layout:** Two-column desktop (pull quote or photo left, text right), single column mobile

---

### Section 3 — The Core

- **Heading:** The Core
- **Pull quote:** "I diagnose the business challenge first. Then I apply editorial discipline to solve it."
- **Body:** Philosophy paragraph (most content problems are clarity/trust/alignment problems; journalism standard applied to brand communications)
- **Three principles (cards/columns):**
  1. Diagnose first — Understand the business challenge before touching a brief
  2. Align internally — Employees and executives are brand channels too
  3. Deliver editorially — Hold the content to the standard you would apply to your own name
- **Layout:** Full-width, slightly different background (alt surface colour), centred or left-aligned

---

### Section 4 — Work (Selected Work)

Three cards, row on desktop, stacked on mobile. Each card: visual block top, sector label, title, case study paragraph, outcome bullets.

**Card 1 — IBM / /newsrooms**
- Sector: Technology | Content Marketing
- Title: Helping IBM reach the startup community
- Image: `work-ibm.jpg` — placeholder until supplied
- Case study + 3 outcome bullets (see brief for full text)

**Card 2 — Perfood GmbH**
- Sector: Digital Health | Regulated Communications
- Title: Building communications for a prescription digital therapeutic
- Image: `work-perfood.jpg` — placeholder until supplied (Perfood event photos available in `perfood-photo/`)
- Case study + 4 outcome bullets (see brief for full text)

**Card 3 — CBC News**
- Sector: Public Broadcasting | Journalism
- Title: Eleven years at Canada's national broadcaster
- Image: `work-cbc.jpg` — placeholder until supplied
- Case study + 4 outcome bullets (see brief for full text)

---

### Section 5 — Early Career (The Foundation)

- **Heading:** The Foundation
- **Intro:** Narrative paragraph about business fluency before CBC; South Africa 1994 principle
- **Engagement list (clean timeline):**
  - South Africa, 1994 — First multi-racial democratic elections. Published in Queen's Alumni Review.
  - Vickers and Benson — Principal writer, Possibility Network Online (Bank of Montreal)
  - RBC Technology Ventures — Communications with startup founders for an established financial institution
  - XPV Capital — Principal coordinator, multi-million dollar VC fund prospectus
  - Ontario Power Generation — Media training, nuclear emergency preparedness simulation
  - Baan World Users Group — Communications Manager, newsletter to live online seminars

---

### Section 6 — Contact

- **Heading:** Get in Touch
- **Body:** Based in Hamburg, open to new opportunities in communications strategy, content leadership, brand communications — technology, healthcare, financial services, regulated sectors.
- **Email:** deen.karim@icloud.com (mailto link)
- **LinkedIn:** linkedin.com/in/editorial-creative
- **Location line:** Hamburg, Germany | Available immediately
- **Layout:** Centred section, no contact form in v1

---

## Assets

All assets are placeholders until supplied by Deen. Use consistent light grey placeholder blocks with centred label text.

| Asset | Filename | Status |
|---|---|---|
| Profile photo (Hero + About) | `deen-karim-photo.jpg` | Pending — being organised |
| Signature image | `s-karim.png` | Pending — will be placed in project directory |
| IBM work card image | `work-ibm.jpg` | Pending |
| Perfood work card image | `work-perfood.jpg` | Pending (event photos in `perfood-photo/`) |
| CBC work card image | `work-cbc.jpg` | Pending |

---

## What Is Explicitly Deferred to V2

Do not build these in v1:

- Expanded case study pages
- German language version
- PDF resume download
- Blog / writing section
- Scroll animations or transitions
- CMS integration

---

## Voice & Tone (for any content decisions)

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
2. **Document** — Update CLAUDE.md or relevant notes if the plan changes
3. **Build** — Implement only what was agreed in the plan for that phase
4. **Commit** — Commit completed work with a clear, descriptive message
5. **Review** — Confirm the output matches the plan before moving to the next phase

### Git Conventions

- Initialise a git repository at the start of the project
- Commit after each meaningful, working unit of work (e.g. scaffold complete, section built, responsive pass done)
- Commit messages should be plain English, present tense, specific:
  - `Add hero section with placeholder photo`
  - `Build work cards — three columns, responsive`
  - `Wire smooth scroll navigation`
- Never commit broken or half-built code
- Create a GitHub remote repository and push regularly

### Planning Before Each Session

Before starting any build work, state clearly:
- What will be built in this session
- What files will be created or modified
- What the expected outcome is

### Tracking What Has Been Done

Maintain a running build log below. Update it as each phase is completed.

---

## Build Log

| Phase | Description | Status |
|---|---|---|
| 1 | Scaffold — git init, Next.js 16 + Tailwind v4, colour palette, fonts, assets copied | Complete |
| 2 | Navigation — sticky nav, hamburger mobile menu | Complete |
| 3 | Hero section — name, title, sub-line, CTAs, profile photo | Complete |
| 4 | About + The Core sections — bio, credentials, philosophy, principles | Complete |
| 5 | Work section — three cards with real images, case studies, outcomes | Complete |
| 6 | Early Career + Contact — engagement list, email, LinkedIn, signature | Complete |
| 7 | Polish & responsive pass | Pending |

---

## Source of Truth

Full content, layout notes, and rationale: `Deen_Karim_Portfolio_Brief.docx` in the project root.
