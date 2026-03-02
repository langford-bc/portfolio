# Re-start Prompt
"Read `GEMINI.md` and `REFINEMENTS.md` to establish context, then review the Active Refinements list. Ask the user which task they want to tackle first in the current sprint, or if they have new refinements to add to the backlog."

# Project Context: Portfolio Site
- **Owner:** Deen Karim
- **Aesthetic:** "Pentagram-inspired" minimalism. High-contrast grayscale (Black, White, Gray) with color reserved ONLY for project imagery. Cinematic spacing, generous whitespace.
- **Layout:** Strict 12-column grid.
- **Typography:** Modern sans-serif (Geist/Inter).
- **Narrative Approach:** Focus on qualitative, strategic storytelling (Client, Challenge, Strategy, Outcome) rather than deep-dive metrics.
- **Tech Stack:** Next.js (App Router, version 16.1.6+), React 19, Tailwind CSS, hosted on Netlify.

# Development Protocols
To maintain strict discipline throughout the development lifecycle, the following protocols MUST be followed during all sessions:

## 1. Roadmap & Planning
- All tasks must be tracked in `REFINEMENTS.md`.
- Break larger roadmap phases (from `ASSESSMENT.md`) into small, actionable sprints.
- Never start coding without a clear, user-approved plan for the current sprint.

## 2. Iterative Execution (Sprints)
- Execute changes in small, logical increments.
- Follow the **Plan -> Act -> Validate** cycle for every sub-task.
- Validate changes by running local builds (`npm run build`) and ensuring no errors exist before considering a task complete.

## 3. Git Management
- Write clear, descriptive commit messages following conventional commit standards (e.g., `Feat:`, `Fix:`, `Refactor:`, `Style:`).
- Group related changes into single, logical commits.
- Never commit broken code.

## 4. Documentation
- Keep `ASSESSMENT.md` updated as roadmap phases are completed.
- Continuously update `REFINEMENTS.md` to reflect active tasks, completed items, and new feature requests.
- Update this `GEMINI.md` file if the core technology stack or architectural approach changes.
