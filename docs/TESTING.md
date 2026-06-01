# Testing Strategy

## Minimum Contract

- `pnpm lint` catches structural and framework-level mistakes.
- `pnpm test:unit` proves component interaction and pure logic.
- `pnpm build` proves the production bundle is still valid.
- `pnpm test:e2e` proves the user-facing browser flow.

## When To Run What

- During local implementation: run `pnpm verify`.
- Before merge on visible UI work: run `pnpm verify:full`.
- CI runs the full suite for PRs and pushes to `main`.

## Coverage Intent

- Unit tests should cover interaction branches and display logic.
- Playwright should cover one smoke path and one meaningful user interaction path.
- If a UI change alters copy or flow, update the tests in the same change.
