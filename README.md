# Alita Work Token

Alita Work Token is a one-page Next.js site for Alita's working-time presale. Each AWT represents one hour of Alita's work at a fixed rate of 2.5M XEC per hour, currently positioned as 50% of Alita's standard work rate, with a 50-hour weekly consumption cap and 200 AWT representing one working month.

The site is built with Next.js, TypeScript, shadcn, Tailwind CSS, pnpm, light/dark mode, unit tests, Playwright coverage, and the local agent harness copied from the project template.

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Start the app:

```bash
pnpm dev
```

3. Run the default verification suite:

```bash
pnpm verify
```

4. Run browser tests with the locally installed Chrome:

```bash
pnpm test:e2e
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

- `app/page.tsx`: the public AWT introduction page.
- `lib/awt.ts`: public content, service areas, and estimate examples.
- `components/theme-toggle.tsx`: light/dark mode control.
- `CLAUDE.md`: project map and rules for Claude Code.
- `AGENT.md`: shared rules for coding agents.
- `docs/PRODUCT.md`: product intent and current v1 scope.
- `docs/ARCHITECTURE.md`: frontend layout and conventions.
- `docs/TESTING.md`: verification strategy.
- `docs/WORKFLOWS.md`: GitHub issue and PR flow.
- `.claude/README.md`: local Claude setup instructions.

## Git Rule

Every meaningful update over 10 changed lines should be saved with `git add` and `git commit` before moving on.
