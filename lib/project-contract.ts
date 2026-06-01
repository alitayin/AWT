export const readinessLanes = [
  {
    id: "architecture",
    label: "Architecture",
    description:
      "Keep feature code behind clear app, component, and library boundaries.",
  },
  {
    id: "harness",
    label: "Harness",
    description:
      "Give Claude and other agents explicit rules, hooks, and verification commands.",
  },
  {
    id: "verification",
    label: "Verification",
    description:
      "Prove every meaningful change with lint, unit tests, build, and browser checks.",
  },
  {
    id: "shipping",
    label: "Shipping",
    description:
      "Use git checkpoints, CI, issue templates, and PR evidence to keep changes reviewable.",
  },
] as const;

export type ReadinessLaneId = (typeof readinessLanes)[number]["id"];

export interface ReadinessItem {
  id: string;
  title: string;
  lane: ReadinessLaneId;
  detail: string;
  status: "ready" | "guarded" | "planned";
}

export const defaultReadinessItems: ReadinessItem[] = [
  {
    id: "next-foundation",
    title: "Next.js App Router foundation",
    lane: "architecture",
    detail:
      "Routes live in app, reusable UI in components, and serializable project facts in lib.",
    status: "ready",
  },
  {
    id: "shadcn-system",
    title: "shadcn component contract",
    lane: "architecture",
    detail:
      "Shared UI uses generated shadcn components, semantic tokens, and cn for composition.",
    status: "ready",
  },
  {
    id: "agent-docs",
    title: "Claude and agent entrypoints",
    lane: "harness",
    detail:
      "CLAUDE.md, AGENT.md, and docs define standard commands, boundaries, and done criteria.",
    status: "guarded",
  },
  {
    id: "local-hooks",
    title: "Local harness hooks",
    lane: "harness",
    detail:
      "Session, sensitive-path, and post-edit format hooks mirror the asyta harness.",
    status: "guarded",
  },
  {
    id: "unit-contract",
    title: "Unit test checkpoint",
    lane: "verification",
    detail:
      "Vitest and Testing Library cover the first interactive component and pure summary logic.",
    status: "ready",
  },
  {
    id: "browser-contract",
    title: "Browser test checkpoint",
    lane: "verification",
    detail:
      "Playwright verifies the initialized page, lane switching, and checklist disclosure.",
    status: "ready",
  },
  {
    id: "git-saves",
    title: "Git save rule",
    lane: "shipping",
    detail:
      "Any update over ten changed lines must be committed so rollback points stay cheap.",
    status: "guarded",
  },
  {
    id: "github-flow",
    title: "GitHub workflow skeleton",
    lane: "shipping",
    detail:
      "Issue templates, PR template, CI, and Claude review workflow are ready for a remote.",
    status: "planned",
  },
];

export const verificationChecklist = [
  "pnpm lint",
  "pnpm test:unit",
  "pnpm build",
  "pnpm test:e2e",
];

export function readinessMetrics(items: ReadinessItem[]) {
  return {
    total: items.length,
    ready: items.filter((item) => item.status === "ready").length,
    guarded: items.filter((item) => item.status === "guarded").length,
  };
}
