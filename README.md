# Follow the Request

A browser-only API lesson. Current checkpoint: live fetch and Console evidence.

Public repository: https://github.com/mrmcgrain/API_NC

The owner approved committing and pushing checkpoint 1 on 2026-10-08 and authorized automatic commits and pushes for routine project changes. Keep lesson checkpoints as separate, verifiable pieces and report what changed.

## Run locally

```powershell
python -m http.server 8080 --bind 127.0.0.1 --directory G:\23\API_NC
```

Open http://127.0.0.1:8080. Open DevTools, select Console, and send a message. Inspect Network to compare the request URL and response with the logged object. The browser calls httpbin directly; the local server only serves the app files.

The request times out after 15 seconds. No API key or application dependencies are required.

## Review checkpoint 1

- `index.html` provides the message input and submit button.
- `app.js` constructs the URL safely, awaits the HTTP response, checks its status, and awaits JSON parsing.
- Numbered Console logs show the URL, HTTP status, parsed object, selected field, and duration.
- Basic failure handling restores the button and reports the error. Full no-data handling and the result card come in checkpoint 2.

Next: useful result display and errors, then the synchronized teaching replay.
