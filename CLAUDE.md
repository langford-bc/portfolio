# CLAUDE.md — Portfolio Project
*Single source of truth for all AI agents working on this project.*
*Last updated: March 3, 2026 — Phase 2 complete.*

---

## The Vision

A Pentagram-inspired portfolio for Deen Karim — Content Director with 20+ years of experience. The site must function as a high-end professional showcase that earns trust from senior business leaders, Creative Directors, public funding agencies, and recruiters.

**The standard:** Exceptional. Not adequate. This represents 20+ years of work and is actively used to secure new engagements.

---

## Design Principles (Non-Negotiable)

- **Palette:** Strictly monochrome — Black / White / Grey. Colour appears only in project imagery.
- **Typography:** Modern sans-serif (Geist/Inter). No serifs on headings.
- **Layout:** 12-column grid. Generous whitespace. Cinematic pacing. More scroll, less busy.
- **Narrative:** Each project follows Client → Challenge → Strategy → Outcome & Assessment. No deep-dive case study format — that belongs in presentations.
- **Outcome tone:** Qualitative and strategic. Not metric-driven.
- **Reference:** Pentagram.com — discipline, authority, restraint.

---

## Current Technical Stack

- **Framework:** Next.js 16.1.6 (App Router), React 19
- **Styling:** Tailwind CSS 3.4
- **Routing:** Dynamic routes via `src/app/projects/[slug]/page.js`
- **Content:** Markdown files in `/content/` (Phase 2 active)
- **Deployment:** Netlify with `@netlify/plugin-nextjs`
- **Node:** v22.13.1
- **Package manager:** npm 10.9.2

---

## Phase Status

### ✅ Phase 1 — Complete
- ESLint build errors resolved
- Pentagram design system established (monochrome palette, 12-column grid, sans-serif typography)
- Project data migrated to narrative case study format (Challenge, Strategy, Outcome)
- Project Brief Intake form implemented on contact page
- Next.js security vulnerability (CVE-2025-55182) resolved — upgraded to 16.1.6
- Deployed and live on Netlify

### ✅ Phase 2 — Complete (March 3, 2026)
- Six project case studies migrated from `src/data/projects.js` to individual Markdown files in `/content/projects/`
- Markdown parser created at `src/lib/markdown/parser.js` (three exports: `getAllProjects()`, `getProjectBySlug()`, `getProjectBodyHtml()`)
- `src/components/Projects.js` updated to read from `getAllProjects()`
- `src/app/projects/[slug]/page.js` updated to read from `getProjectBySlug()`
- Field renamed: `result` → `outcome` throughout, aligning data with UI label "Outcome & Assessment"
- Dependencies added: `gray-matter`, `remark`, `remark-html`
- AGENTS.md renamed to CLAUDE.md

**⚠️ One cleanup item remaining from Phase 2:**
`src/data/projects.js` is still in the repository. It is now unused. Delete it in a follow-up commit after confirming the live site is stable.

### 🔲 Phase 2 — Remaining
- `content/pages/home.md` — hero text and About section content
- `content/pages/contact.md` — contact page intro text
- Netlify Forms on the Project Brief Intake form

### 🔲 Phase 3 — Future
- GCP backend and client project portal
- Headless CMS evaluation (Sanity or similar)
- Advanced media: image galleries, video embeds per project
- Analytics integration

---

## Content Workflow (Phase 2 and Beyond)

**To update a project case study:**
1. Open the relevant file in `/content/projects/`
2. Edit the frontmatter fields directly
3. Commit and push to `main`
4. Netlify redeploys automatically (typically under 60 seconds)

No code changes required for content updates.

---

## Project Content Files

| File | Project | Order |
|------|---------|-------|
| `content/projects/bdc-mars-fintech-2016.md` | BDC Mars Fintech | 1 |
| `content/projects/bmw-running-at-work.md` | BMW Canada | 2 |
| `content/projects/specialized-crux-launch.md` | Specialized Bikes | 3 |
| `content/projects/ptc-at-center-of-IoT.md` | PTC | 4 |
| `content/projects/ibm-innovation-at-scale.md` | IBM | 5 |
| `content/projects/kpmg-transformational-partnerships-growth.md` | KPMG | 6 |

---

## Markdown Frontmatter Schema

Every project file must use this schema:

```yaml
---
title: ""
subtitle: ""
slug: ""
client: ""
year: ""
role: ""
category: ""
image: /images/filename.jpg
order: 1
challenge: >
  Text here.
strategy: >
  Text here.
outcome: >
  Text here.
---
```

**Note:** The field is `outcome` — not `result`. This was corrected in Phase 2.

---

## Deployment

- **Platform:** Netlify
- **Trigger:** Every push to `main` auto-deploys
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs`
- **Known past issue:** Next.js version security block (CVE-2025-55182) — resolved. Current version is 16.1.6. Do not downgrade.

---

## Development Protocols

**Always follow this sequence. No exceptions.**

1. **Read this file first** before taking any action
2. **Propose before building** — present structure or approach and wait for approval before writing code
3. **One task per session** — do not proceed to the next step without explicit instruction
4. **Flag ambiguity before building on it** — if something is unclear, ask before proceeding
5. **Verify the push reached GitHub** — confirm the PR URL before reporting work complete. Do not report done until a real GitHub PR URL is provided.
6. **Leave safety nets in place** — do not delete legacy files until the deployment is confirmed live and stable
7. **Run `npm run build` locally** before committing — catch errors before they reach Netlify
8. **Commit messages** follow conventional commits format: `Feat:`, `Fix:`, `Docs:`, `Chore:`

---

## Target Audience

Design and content decisions must serve these readers:

- Senior business leaders and decision-makers
- Creative Directors
- Public funding agencies
- Recruiters and collaborators

Every page, every word, every layout choice is evaluated against this audience.

---

## What This Site Is Not

- Not a gallery. It is a narrative showcase.
- Not a blog. Content updates happen through Markdown files, not a publishing workflow.
- Not a developer portfolio. The audience is business and creative leadership.
- Not a template. Every design decision is intentional and specific.

---

*This file is the single source of truth. If there is a conflict between this file and any other document in the repository, this file takes precedence.*
