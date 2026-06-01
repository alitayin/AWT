#!/usr/bin/env node

import path from "node:path";

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

function normalizeFilePath(filePath, rootDir) {
  const absolute = path.isAbsolute(filePath)
    ? filePath
    : path.join(rootDir, filePath);
  return path.relative(rootDir, absolute).replace(/\\/g, "/");
}

function isSensitive(relativePath) {
  return (
    relativePath === ".env" ||
    relativePath.startsWith(".env.") ||
    relativePath.startsWith("secrets/") ||
    relativePath.startsWith(".next/") ||
    relativePath.startsWith("coverage/") ||
    relativePath.startsWith("playwright-report/") ||
    relativePath.startsWith("test-results/") ||
    relativePath.startsWith("node_modules/")
  );
}

const raw = await readStdin();
const payload = raw ? JSON.parse(raw) : {};
const projectDir =
  process.env.CLAUDE_PROJECT_DIR || payload.cwd || process.cwd();
const toolInput = payload.tool_input ?? {};
const candidates = [];

if (typeof toolInput.file_path === "string") {
  candidates.push(toolInput.file_path);
}

if (Array.isArray(toolInput.files)) {
  candidates.push(...toolInput.files);
}

const offenders = candidates
  .map((filePath) => normalizeFilePath(filePath, projectDir))
  .filter(isSensitive);

if (offenders.length > 0) {
  process.stderr.write(
    `Blocked access to protected path(s): ${offenders.join(", ")}\n`,
  );
  process.exit(2);
}
