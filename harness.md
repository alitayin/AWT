# AlitaToken Harness

This repository uses the same harness shape as `/Users/gongdongjie/Downloads/asyta`, adapted for a Next.js, shadcn, Tailwind CSS, TypeScript, and pnpm project.

## Goal

The harness makes the agent workflow explicit:

- which docs to read first
- which commands prove a change
- which paths are protected
- which hooks run around local Claude tool use
- when git checkpoints are required

## Components

### Project Instructions

- `CLAUDE.md` is the Claude-specific project map.
- `AGENT.md` is the shared contract for all coding agents.
- `AGENTS.md` points agents that expect the plural filename back to `AGENT.md`.

Both instruction files require:

- repository scripts instead of ad hoc commands
- tests for behavior changes
- git commits after meaningful updates over 10 changed lines
- protected path rules for secrets and generated output

### Local Claude Setup

- `.claude/settings.local.example.json` is the committed template.
- `.claude/settings.local.json` is the local active config and is ignored by git.
- `.claude/hooks/session-start.mjs` prints branch, dirty state, and verification commands.
- `.claude/hooks/guard-sensitive-paths.mjs` blocks `.env*`, `secrets/**`, generated output, and dependency directories.
- `.claude/hooks/post-edit-format.mjs` formats and lints edited files after writes.

### Documentation Layer

- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`
- `docs/TESTING.md`
- `docs/WORKFLOWS.md`

These docs keep long-lived rules outside chat history and make future agent sessions predictable.

### Verification Contract

- `pnpm lint`
- `pnpm test:unit`
- `pnpm build`
- `pnpm test:e2e`
- `pnpm verify`
- `pnpm verify:full`

Unit tests cover the interactive readiness board. Playwright covers the initialized page and checklist path.

### GitHub Skeleton

- `.github/workflows/ci.yml`
- `.github/workflows/claude-review.yml`
- `.github/ISSUE_TEMPLATE/task.yml`
- `.github/pull_request_template.md`

These files are ready once a remote repository and required secrets exist.

## Current Limits

- The git save rule is documented, not enforced by a hook.
- The Claude review workflow requires `ANTHROPIC_API_KEY` in GitHub secrets.
- The product has no token contracts, wallet integration, or backend yet.

## Reuse Notes

If this harness is copied into another project, migrate the instruction files, `.claude/hooks`, `docs/`, verification scripts, and GitHub templates together so local and CI evidence stay aligned.
