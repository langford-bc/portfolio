# AGENTS.md — Portfolio Project
*Single source of truth for all AI agents working on this project.*
*Supersedes all other agent briefing files (GEMINI.md, etc.).*

---

## Who You Are Working With

This is the portfolio of **Deen Karim**, a Content Director with 20+ years of experience in
storytelling, strategy, and creative direction. The site is a professional showcase targeting
senior business leaders, Creative Directors, public funding agencies, and recruiters.

This is not a developer portfolio. Every decision — visual, structural, and narrative —
must reflect the authority and discipline of the work it represents.

---

## The Vision

The design direction is **Pentagram-inspired minimalism**:

- **Monochrome palette only.** Black, white, and grey. Color appears exclusively within
  project imagery. No accent colors. No exceptions.
- **Modern sans-serif typography.** Geist or Inter. Typography carries authority — it is
  never decorative.
- **Cinematic pacing.** Generous whitespace, large-scale imagery, layouts that reward
  scrolling. Less busy. More considered.
- **12-column grid discipline.** Visual order across all screen sizes.
- **Qualitative narrative.** Each project has three parts: Client, Project Details,
  and Outcome/Assessment. No deep-dive case studies. No bullet-point summaries.

---

## Current Technical Stack

- **Framework:** Next.js 15.5.12 (App Router), React 19
- **Styling:** Tailwind CSS 3.4
- **Routing:** Dynamic routes via `src/app/projects/[slug]/page.js`
- **Content:** Markdown files in `/content/` (Phase 2 and beyond)
- **Deployment:** Netlify (with `@netlify/plugin-nextjs`)
- **Node:** v22

---

## Project Structure

```
content/
  projects/          # One .md file per project case study
  pages/             # home.md, contact.md for static page content
src/
  app/
    page.js              # Home page — Hero + Project list
    layout.js            # Global layout + Navigation
    projects/
      [slug]/page.js     # Individual project detail template
    contact/             # Contact + Project Brief Intake form
    api/contact/         # API route for contact form
  components/
    AboutMe.js
    Contact.js
    HeroSection.js
  data/
    projects.js          # Legacy — being migrated to Markdown in Phase 2
  lib/
    markdown/
      parser.js          # Markdown parser utility (gray-matter, remark, remark-html)
```

---

## Phase Roadmap

Jules must always be aware of which phase is active. **Do not work ahead of the current phase
without explicit instruction.**

### ✅ Phase 1 — Complete
Foundation work is done:
- Design system established (Tailwind config, globals.css)
- Project data enriched with narrative structure
- Home page and project detail template redesigned
- Contact form and Project Brief Intake implemented
- Netlify deployment confirmed working

### 🔄 Phase 2 — Active
CMS and media integration:
- Migrate project content from `src/data/projects.js` to Markdown files in `/content/projects/`
- Migrate home page hero text, About section, and contact page content to `/content/pages/`
- Implement Netlify Forms on the Project Brief Intake form
- Use `next/font` for typography and `next/image` for all project assets
- Add support for video embeds (Vimeo/YouTube) and image galleries
- Implement smooth page transitions and micro-interactions

### 🔮 Phase 3 — Future
Advanced functionality (do not begin without instruction):
- GCP backend for asset storage
- Client project portal
- Headless CMS (Sanity or Contentful)
- Netlify CLI integration for environment and deploy management

---

## Development Protocols

These protocols apply to every session without exception:

### Planning
- Never start coding without a user-approved plan for the current sprint
- Propose structure or approach first — wait for approval before writing code
- Break larger phases into small, sequential steps
- Present one step at a time and confirm before proceeding to the next

### Execution
- Follow the **Plan → Act → Validate** cycle for every task
- Validate changes by running `npm run build` before considering any task complete
- Execute changes in small, logical increments
- Never commit broken code

### Git
- Write clear, descriptive commit messages using conventional commit standards:
  `Feat:`, `Fix:`, `Refactor:`, `Style:`, `Docs:`
- Group related changes into single, logical commits
- One PR per phase or feature — do not bundle unrelated changes

### Documentation
- Keep `ASSESSMENT.md` updated as roadmap phases are completed
- Update this file if the core technology stack or architectural approach changes

---

## Standing Instructions

These rules apply to every task unless explicitly overridden:

1. **Preserve the design system.** Never modify `tailwind.config.mjs` or `globals.css`
   without a specific instruction to do so.
2. **Do not introduce new dependencies** without flagging them first and explaining why
   they are necessary.
3. **Deployment is part of done.** A task is not complete until the build passes on Netlify.
   Flag any potential deployment risks before submitting a PR.
4. **No deep-dive copy.** Do not write long-form case study content. Project narratives
   follow the format: Client → Project Details → Outcome/Assessment.
5. **Ask before assuming.** If a requirement is ambiguous, ask one focused clarifying
   question before proceeding.

---

## Key Design Decisions (Do Not Revisit Without Instruction)

These decisions were made deliberately and are not open for re-interpretation:

| Decision | Choice Made |
|---|---|
| Typography style | Modern sans-serif (Geist or Inter) |
| Color palette | Monochrome only — black, white, grey |
| Color in imagery | Yes — project images may be full color |
| Narrative format | Client + Project Details + Outcome/Assessment |
| Narrative depth | Qualitative reflections, not quantitative metrics |
| CMS approach (Phase 2) | Markdown files in codebase — no external CMS tools |
| Portal backend (Phase 3) | Google Cloud Platform |
| Scroll behavior | Cinematic — generous whitespace, rewards scrolling |
| Form submissions | Netlify Forms — no custom backend required |

---

## Deployment Context

- **Platform:** Netlify
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs`
- **Known past issue:** Next.js version security block (CVE-2025-55182) — resolved.
  Current version is 15.5.12. Do not downgrade the Next.js version.

---

## A Note on Co-Driver Workflow

The project owner is not a developer. Communication should be clear, jargon-light,
and structured. When Jules completes a task:

- Summarize what was done in plain language
- Flag any decisions that were made during execution
- Note anything the project owner needs to do (e.g., review, merge, test)
- If a deployment risk exists, say so explicitly before the PR is submitted
- A task is not complete until the Netlify deployment is confirmed working
