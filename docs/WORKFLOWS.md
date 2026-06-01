# GitHub Workflow

## Intake

- Open work from the issue template.
- Include the target outcome, constraints, and acceptance criteria.
- Add `claude-ready` only when the issue is clear enough for implementation.

## Local Delivery

- Copy `.claude/settings.local.example.json` to `.claude/settings.local.json`.
- Let Claude work from `CLAUDE.md`, `AGENT.md`, and the repo scripts rather than ad hoc commands.
- Use `pnpm verify` as the minimum checkpoint before opening a PR.
- Commit every meaningful update over 10 changed lines.

## PR Handoff

- Fill out `.github/pull_request_template.md`.
- Include screenshots for visible UI changes.
- Call out risk areas and follow-up work explicitly.

## Review And Merge

- CI must pass.
- Use `@claude` comments for follow-up review or implementation help.
- Use `needs-human` for tasks Claude should not finish alone.
- Use `safe-to-auto` for low-risk follow-up automation work.
