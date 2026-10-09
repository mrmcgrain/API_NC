"use strict";

const form = document.querySelector("#request-form");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#send");
const statusElement = document.querySelector("#status");

async function requestEcho(message) {
  const url = new URL("https://httpbin.org/get");
  url.search = new URLSearchParams({ lesson: "API", message }).toString();
  console.log("[1] Starting request", { url: url.href });

  const started = performance.now();
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
  });
  console.log("[2] Response received", {
    status: response.status,
    ok: response.ok,
  });
  if (!response.ok) {
    throw new Error(`The API returned HTTP ${response.status}.`);
  }

  const data = await response.json();
  console.log("[3] Parsed response data", data);
  console.log("[4] Selected display value", data.args?.message);
  console.log("[5] Request complete", {
    durationMs: Math.round(performance.now() - started),
  });
  return data;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  sendButton.disabled = true;
  statusElement.textContent = "Request running. Watch the Console and Network panels.";
  try {
    await requestEcho(messageInput.value);
    statusElement.textContent = "Response received. Expand [3] in the Console to inspect the data.";
  } catch (error) {
    console.error("[Error] Request failed", error);
    statusElement.textContent = `Request failed: ${error.message} Try again.`;
  } finally {
    sendButton.disabled = false;
  }
});
