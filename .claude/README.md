# Local Claude Setup

This repository keeps Claude's enforceable rules local-first. Commit the shared docs and hook scripts, but keep personal permissions in `.claude/settings.local.json`.

## Enable the local harness

```bash
cp .claude/settings.local.example.json .claude/settings.local.json
```

## What the template does

- Allows the normal repository verification commands.
- Denies direct reads of `.env*` and `secrets/**`.
- Runs a session context hook at startup.
- Guards sensitive paths before file tools run.
- Formats edited files after successful file writes.

## Notes

- Hook commands use `$CLAUDE_PROJECT_DIR` so they still work when Claude changes directories.
- Keep `pnpm verify` and `pnpm verify:full` intact so local and CI evidence stay aligned.
