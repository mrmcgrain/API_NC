# Follow the Request

A browser-only API field lab for a three-minute classroom lesson. One real message, eight teaching stages, four synchronized panels.

## Run

```powershell
python -m http.server 8080 --bind 127.0.0.1 --directory G:\23\API_NC
```

Open http://127.0.0.1:8080. No package installation or API key is required. Python serves static files only. Browser JavaScript calls httpbin directly.

## Present

1. Leave the experiment on **Live echo · httpbin**. Type a non-sensitive message and click **Send request**.
2. The real request runs normally. After it finishes, the teaching replay begins at stage 1.
3. Click **Next step** to reveal the request journey, matching source lines, recorded HTTP evidence, and Console events together. Previous, numbered stages, and Restart let you revisit any step without issuing another request.
4. At stage 7 or 8, try the wrong-field example. It compares `data.message` with `data.args.message` from the captured response.
5. Open actual DevTools with F12 to verify Network and Console. Built-in panels are app-recorded evidence, not embedded DevTools.

The main lesson fits a 1440×900 desktop viewport. On a phone the panels stack. Arrow keys move through replay outside inputs and scrollable evidence panels. Reduced-motion preferences disable packet animation. [Three-minute presenter guide](PRESENTATION.md).

## Data flow

Click -> async JavaScript -> encoded URL -> browser networking -> external httpbin -> response status/headers -> JSON body parsing -> nested field -> textContent -> browser paint.

`requestEcho.toString()` supplies the displayed source. Stage comments map highlighting to the function's actual lines. Server processing has no source in our app; its illustration highlights the still-waiting fetch call. Promises remain in JavaScript while HTTP messages travel.

`record()` snapshots each logged value and its elapsed time, then logs the same value in the real Console. Replay reveals snapshots by stage. Its timing is illustrative; the actual header and completion timings are measured independently. Traces exist in memory until the next request or page refresh, and carry a Phoenix capture time.

## Errors and evidence

- Live echo uses `https://httpbin.org/get` with encoded query parameters.
- Live HTTP error uses `https://httpbin.org/status/404` and verifies status handling.
- Local no-data fixture constructs `{"args":{}}` inside a Response object. It makes no HTTP request and omits the server stage.
- Network failures, 15-second timeouts, unsuccessful status, malformed JSON, and missing/blank messages produce readable errors. Failed traces omit stages never reached.
- The wrong-field example is an intentional teaching bug. It is not claimed as an accidental Codex mistake.

Do not submit sensitive information: messages appear in the request URL and are sent to a public service. External service availability is outside the app's control. No mock is silently substituted for live requests.

## Verification

JavaScript syntax checked with `node --check app.js`. Browser QA through Playwright CLI verified real echoed data, special characters/Unicode, safe text rendering, stage highlighting and evidence visibility, zero extra requests during replay, the wrong-field example, real HTTP 404, offline failure, labeled no-data fixture, controlled malformed JSON, keyboard operation, reduced motion, desktop fit and mobile overflow.

Local screenshots and the browser QA script are under `output/playwright/` and ignored by Git. No npm app dependencies, build step, or automated test framework is required.

## Development record

Repository: https://github.com/mrmcgrain/API_NC.

Checkpoint 1 was already published. The owner subsequently authorized autonomous routine development, verification, commits, and pushes, including completion of all visual checkpoints. Checkpoint commits describe actual changes and checks; they do not claim simulated student review.

Records begin with partial historical coverage. Source records are authoritative; Obsidian mirrors use hash-verifying helpers. See [project state](logs/project-state.md), [prompt log](logs/prompt-log.md), and [daily recap](dailyprompt.md).
