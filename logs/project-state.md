# Project State

## Objective
Follow the Request is a browser-only API lesson and interactive three-minute classroom presentation. A real httpbin echo is replayed slowly with synchronized code, diagram, response evidence and logs.

## Architecture
Static HTML/CSS/JavaScript -> browser fetch -> https://httpbin.org/get -> Response -> parsed JSON -> data.args.message -> textContent.
Python serves files only. No backend or app dependencies. requestEcho.toString() supplies the displayed source; stage comments map highlights. record() snapshots Console events. Traces live in browser memory until the next request or refresh.

## Important Files
- index.html: four-panel teaching interface and controls.
- app.js: actual request function, traces, replay, errors, source highlighting and debugging example.
- styles.css: desktop/mobile layout, diagram, focus styles and reduced motion.
- PRESENTATION.md: three-minute presenter script and real-vs-intentional mistake guidance.
- README.md: run, verification and implementation notes.
- logs/prompt-log.md: canonical exact transcript with partial historical coverage and entries from multiple chats.
- output/playwright/: ignored browser QA script and screenshots.

## Services
- Local static server: http://127.0.0.1:8080. Verified running during this turn.
- External API: httpbin.org/get; live error demonstration: httpbin.org/status/404.
- Public source repository: https://github.com/mrmcgrain/API_NC, branch main.
- No hosted website deployment configured.

## Environment
Windows, PowerShell, Git, Python and Node.js available. Playwright CLI invoked via npx. Git Credential Manager previously authenticated pushes; GitHub CLI unauthenticated in earlier publication session.

## Decisions
- Source: G:\23\API_NC; records mirror: F:\Obsidian\SecondBrain\01-Projects\API_NC.
- Owner authorized autonomous routine commits and pushes, and completion of all visual checkpoints without intermediate review. Commit messages describe actual implementation; no simulated student review is claimed.
- Browser directly calls a real API; no hidden mock fallback.
- Built-in panels replay app-recorded evidence, not embedded DevTools.
- Replay timing is illustrative; actual header and completion times and Phoenix capture time are displayed.
- Server internals are a simplified illustration. The Promise remains with JavaScript.
- Local no-data fixture is explicitly labeled and never contacts a server.
- Wrong-field example is an intentional teaching bug, not a claimed accidental agent error.

## Known Issues
- Public service availability varies; errors are displayed without substitution.
- Desktop main lesson verified at 1440x900. Mobile stacks panels and requires scrolling.
- Raw response and code areas scroll internally; the latest evidence and active code are brought into view.
- Browser QA intentionally emits expected errors for failed experiments.
- Traces are not persisted across refreshes.
- Student has not yet rehearsed the script or reviewed all checkpoint diffs.

## Current Work
All implementation checkpoints complete and published. Remote main verified to match local application commit 9a207f9. Records mirrored using hash-verifying helpers; student rehearsal is next.

## TODO
- Student opens the local demo and rehearses the three-minute lesson.
- Review commit diffs for class and explain one actual code change.

## Last Known Working State
2026-10-08: browser QA verified real echo including spaces, ampersand, Unicode and literal HTML; evidence gating; all highlights; zero replay HTTP requests; wrong-field example; real HTTP 404; offline handling; controlled malformed JSON; local no-data fixture; keyboard navigation; reduced motion; 1440x900 desktop fit and 390px mobile overflow. Separate browser check verified 15-second timeout and omitted unobserved response stages. node --check app.js passed.

Checkpoint commits: 7cbc028 (display/errors), d36762b (replay/evidence), 9a207f9 (presentation polish/guide). Checkpoint 1 was already published as 5470a43. Publication and sync results are recorded in conversation history after verification.

