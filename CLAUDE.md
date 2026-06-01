# Project Map

- Product intent: `docs/PRODUCT.md`
- Frontend architecture: `docs/ARCHITECTURE.md`
- Verification rules: `docs/TESTING.md`
- GitHub workflow: `docs/WORKFLOWS.md`
- Local Claude setup: `.claude/README.md`
- Shared agent rules: `AGENT.md`

# Standard Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Unit tests: `pnpm test:unit`
- Browser tests: `pnpm test:e2e`
- Build: `pnpm build`
- Default verification: `pnpm verify`
- Full verification: `pnpm verify:full`

# Working Rules

- Read the relevant doc page before broad changes.
- Keep feature code inside the documented `app`, `components`, and `lib` boundaries.
- Prefer shadcn components and semantic Tailwind tokens over custom UI primitives.
- Add or update tests when behavior changes.
- Prefer repository scripts over ad hoc commands.
- If a single update touches more than 10 lines, run `git add` and `git commit` after the update so there is a rollback point.
- Keep local Claude permissions in `.claude/settings.local.json`, not in committed files.

# Definition Of Done

- `pnpm verify` passes locally for code changes.
- `pnpm verify:full` passes before merge for visible UI flows.
- The PR template includes screenshots for visible UI changes.
- Docs are updated if behavior, architecture, or workflow changed.

# Safety

- Do not read `.env*` or `secrets/**`.
- Do not edit `.next`, `coverage`, `playwright-report`, `test-results`, or `node_modules`.
- Ask before adding external services, changing CI secrets, or altering deployment behavior.
