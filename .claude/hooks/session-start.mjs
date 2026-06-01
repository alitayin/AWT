#!/usr/bin/env node

import { execFileSync } from "node:child_process";

function runGit(args) {
  try {
    return execFileSync("git", args, {
      cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

const branch = runGit(["branch", "--show-current"]) || "unborn";
const status = runGit(["status", "--short"]);

const lines = [
  "Session context:",
  `- Branch: ${branch}`,
  `- Working tree: ${status ? "dirty" : "clean"}`,
  "- Minimum verification: `pnpm verify`",
  "- Full verification before merge: `pnpm verify:full`",
  "- Project map: `CLAUDE.md`, `AGENT.md`, `docs/ARCHITECTURE.md`, `docs/TESTING.md`",
  "- Local Claude config template: `.claude/settings.local.example.json`",
];

if (status) {
  lines.push("- Pending changes:");
  for (const entry of status.split("\n").slice(0, 8)) {
    lines.push(`  ${entry}`);
  }
}

process.stdout.write(`${lines.join("\n")}\n`);
