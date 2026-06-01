# Agent Operating Contract

This file is for coding agents working in this repository. `CLAUDE.md` contains Claude-specific onboarding; this file is the shared baseline for all agents.

## Repository Shape

- `app/` contains Next.js App Router entrypoints and global CSS.
- `components/` contains reusable React UI. Generated shadcn files stay in `components/ui/`.
- `lib/` contains serializable data, pure helpers, and shared contracts.
- `tests/e2e/` contains Playwright browser coverage.
- `docs/` contains product, architecture, testing, and workflow context.

## Required Commands

- Install with `pnpm install`.
- Use `pnpm lint`, `pnpm test:unit`, and `pnpm build` for the default proof.
- Use `pnpm verify` before handing off code changes.
- Use `pnpm verify:full` before merging visible UI flow changes.

## Engineering Rules

- Keep TypeScript strict and do not enable `allowJs`.
- Keep server components at route boundaries unless client interactivity is required.
- Use shadcn components before custom markup for buttons, badges, cards, separators, toggles, and future form controls.
- Use semantic tokens like `bg-background`, `text-muted-foreground`, and `border-border`.
- Put behavior data and pure logic in `lib/` so it can be unit tested without rendering pages.
- Commit every meaningful update over 10 changed lines.

## Safety Rules

- Do not read `.env*` or `secrets/**`.
- Do not edit generated or runtime output directories: `.next`, `coverage`, `playwright-report`, `test-results`, `node_modules`.
- Do not push, change remotes, or alter deployment secrets without explicit user approval.
