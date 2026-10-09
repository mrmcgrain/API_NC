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
- Public GitHub repository: https://github.com/mrmcgrain/API_NC, created empty.
- Local origin: https://github.com/mrmcgrain/API_NC.git.

## Environment
Windows, PowerShell, Git, Python and GitHub CLI available. No app dependencies.

## Decisions
- Existing source stays at G:\23\API_NC.
- On 2026-10-08 the owner approved pushing checkpoint 1 and automatic commits and pushes for routine project changes, superseding the earlier pre-commit approval requirement. Keep lesson checkpoints separate and verify each change.
- Obsidian mirror: F:\Obsidian\SecondBrain\01-Projects\API_NC.

## Known Issues
- GitHub CLI is not authenticated.
- No commits yet; current unborn branch is main. Nothing staged or pushed.
- Persistent records were missing. Logging begins with this session, not earlier history.

## Current Work
Checkpoint 1 approved; preparing initial commit and push.

## TODO
- Publish the approved first checkpoint and verify remote commit.
- Implement the result display and error-handling checkpoint, then the teaching replay when development resumes.

## Last Known Working State
JavaScript syntax check passed with node --check app.js. Public empty repository verified in GitHub UI. Local origin configured and remote access verified. Runtime behavior has not been verified in this session.
