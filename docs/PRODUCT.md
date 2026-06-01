# Product Intent

AlitaToken is initialized as a strict frontend foundation for a future token product. The first goal is not feature breadth; it is a reliable repository contract for building UI with Next.js, shadcn, Tailwind CSS, TypeScript, and pnpm.

## V1 Scope

- A single Next.js application with a working initialization dashboard.
- shadcn UI primitives installed as source code under `components/ui`.
- A repeatable verification contract built from lint, unit tests, production build, and browser tests.
- Repo-level documentation that explains how humans, Claude, and other agents should work inside the project.
- GitHub templates and workflows that keep issue intake, PR review, and CI aligned.

## Out Of Scope For V1

- Token contracts, wallets, backend services, or API integrations.
- Multi-package or monorepo layout.
- Deployment credentials or production secret handling.
- External PM, design, analytics, or monitoring integrations.

## Success Signal

A new task can be implemented locally with a small diff, verified with `pnpm verify`, and handed off through a PR whose evidence matches CI output.
