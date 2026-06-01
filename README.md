# alitatoken

AlitaToken is a Next.js frontend repository initialized with shadcn, Tailwind CSS, TypeScript, pnpm, local Claude harness rules, unit tests, Playwright coverage, and GitHub workflow templates.

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Install the Playwright browser used by local E2E runs:

```bash
pnpm exec playwright install --with-deps chromium
```

3. Start the app:

```bash
pnpm dev
```

4. Run the default verification suite:

```bash
pnpm verify
```

5. Opt into the local Claude harness:

```bash
cp .claude/settings.local.example.json .claude/settings.local.json
```

## Standard Scripts

- `pnpm dev` starts the Next.js app.
- `pnpm lint` runs ESLint against the repository.
- `pnpm test:unit` runs the Vitest suite once.
- `pnpm test:e2e` runs the Playwright suite.
- `pnpm build` produces a production build.
- `pnpm verify` runs `lint`, `test:unit`, and `build`.
- `pnpm verify:full` runs `verify` and then `test:e2e`.

## Repository Map

- `CLAUDE.md`: project map and rules for Claude Code.
- `AGENT.md`: shared rules for coding agents.
- `docs/PRODUCT.md`: product intent and current v1 scope.
- `docs/ARCHITECTURE.md`: frontend layout and conventions.
- `docs/TESTING.md`: verification strategy.
- `docs/WORKFLOWS.md`: GitHub issue and PR flow.
- `.claude/README.md`: local Claude setup instructions.

## Git Rule

Every meaningful update over 10 changed lines should be saved with `git add` and `git commit` before moving on.
