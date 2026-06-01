#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

function readStdin() {
  return new Promise((resolve) => {
    let buffer = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      buffer += chunk;
    });
    process.stdin.on("end", () => {
      resolve(buffer);
    });
  });
}

function collectFiles(payload, projectDir) {
  const toolInput = payload.tool_input ?? {};
  const paths = new Set();

  if (typeof toolInput.file_path === "string") {
    paths.add(toolInput.file_path);
  }

  if (Array.isArray(toolInput.files)) {
    for (const entry of toolInput.files) {
      if (typeof entry === "string") {
        paths.add(entry);
      }
    }
  }

  return [...paths]
    .map((filePath) =>
      path.isAbsolute(filePath) ? filePath : path.join(projectDir, filePath),
    )
    .filter((filePath) => fs.existsSync(filePath))
    .filter(
      (filePath) =>
        !/\/(\.next|coverage|node_modules|playwright-report|test-results)\//.test(
          filePath,
        ),
    );
}

function run(command, args, projectDir) {
  const result = spawnSync(command, args, {
    cwd: projectDir,
    stdio: "pipe",
    encoding: "utf8",
  });

  if (result.status !== 0) {
    const detail = result.stderr || result.stdout || "unknown failure";
    process.stderr.write(`${detail.trim()}\n`);
  }
}

const raw = await readStdin();
const payload = raw ? JSON.parse(raw) : {};
const projectDir =
  process.env.CLAUDE_PROJECT_DIR || payload.cwd || process.cwd();
const files = collectFiles(payload, projectDir);

if (files.length === 0) {
  process.exit(0);
}

const formatTargets = files.filter((filePath) =>
  [".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json"].includes(
    path.extname(filePath),
  ),
);

if (formatTargets.length > 0) {
  run("pnpm", ["exec", "prettier", "--write", ...formatTargets], projectDir);
}

const lintTargets = files.filter((filePath) =>
  [".ts", ".tsx", ".js", ".jsx"].includes(path.extname(filePath)),
);

if (lintTargets.length > 0) {
  run("pnpm", ["exec", "eslint", "--fix", ...lintTargets], projectDir);
}
