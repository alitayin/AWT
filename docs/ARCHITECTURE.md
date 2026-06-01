# Frontend Architecture

## Layout

- `app/` contains Next.js App Router entrypoints and global styling.
- `components/` contains reusable React UI. Generated shadcn components stay in `components/ui/`.
- `lib/` contains serializable data, pure helpers, and cross-component contracts.
- `tests/e2e/` contains Playwright browser scenarios.
- `.claude/` contains local Claude harness templates and hooks.

## Boundaries

- Route files should stay thin and compose feature components.
- Client components must start with `"use client"` and should be isolated to interactive surfaces.
- Shared data and pure logic must live in `lib/` so unit tests can cover them without rendering pages.
- shadcn files are source-owned after generation. Read them before updating and keep imports aligned with `components.json`.

## UI Conventions

- Prefer shadcn components over custom markup for common controls and layout pieces.
- Use semantic Tailwind tokens, not raw color utilities.
- Use `cn()` for conditional classes.
- Use `gap-*` for spacing and `size-*` when width and height match.
- Use lucide icons inside buttons when an icon improves recognition.
- Do not create nested cards or marketing-only landing pages for product surfaces.

## Change Rules

- Keep diffs scoped to the feature or workflow being changed.
- Add an abstraction only when it removes real duplication or matches an established local pattern.
- Update docs when architecture, commands, or workflow expectations change.
