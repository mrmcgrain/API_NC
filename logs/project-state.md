# Project State

## Objective
API_NC is a browser-only API lesson called Follow the Request. Checkpoint 1 sends a message to httpbin and shows numbered Console diagnostics.

## Architecture
Static HTML and JavaScript -> browser fetch -> https://httpbin.org/get.
Python's HTTP server serves local files only.

## Important Files
- index.html: message form and Console/Network instructions.
- app.js: URL encoding, fetch, HTTP status check, JSON parsing, timing, error handling.
- README.md: run instructions and sequential review checkpoints.
- logs/prompt-log.md: exact visible transcript, coverage begins this session.
- CHANGELOG.md: existing checkpoint 1 changes.

## Services
- Suggested local preview: 127.0.0.1:8080. Running state unverified.
- External API: httpbin.org, no key required.
- Public GitHub repository: https://github.com/mrmcgrain/API_NC, checkpoint 1 published on main.
- Local origin: https://github.com/mrmcgrain/API_NC.git.

## Environment
Windows, PowerShell, Git, Python and GitHub CLI available. No app dependencies.

## Decisions
- Existing source stays at G:\23\API_NC.
- On 2026-10-08 the owner approved pushing checkpoint 1 and automatic commits and pushes for routine project changes, superseding the earlier pre-commit approval requirement. Keep lesson checkpoints separate and verify each change.
- Obsidian mirror: F:\Obsidian\SecondBrain\01-Projects\API_NC.

## Known Issues
- GitHub CLI is not authenticated.
- No known publication blocker. Git Credential Manager successfully authenticated the push.
- Persistent records were missing. Logging begins with this session, not earlier history.

## Current Work
Checkpoint 1 published. Routine future commits and pushes are authorized.

## TODO
- Implement the result display and error-handling checkpoint, then the teaching replay when development resumes.

## Last Known Working State
2026-10-08: checkpoint 1 committed as 5470a43 and pushed to origin/main. Remote SHA matched the local commit. node --check app.js and git diff --cached --check passed. Runtime behavior was not retested during publication. Repository-local author identity uses the authenticated owner's GitHub noreply address.
