"use strict";

const form = document.querySelector("#request-form");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#send");
const statusElement = document.querySelector("#status");
const resultElement = document.querySelector("#result");

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
  const value = data?.args?.message;
  if (typeof value !== "string" || !value.trim()) {
    throw new Error("The API returned no message. Inspect the response data.");
  }
  console.log("[4] Selected display value", value);
  resultElement.textContent = value;
  console.log("[5] Updated the page", value);
  console.log("[Timing] Request complete", {
    durationMs: Math.round(performance.now() - started),
  });
  return data;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  sendButton.disabled = true;
  resultElement.textContent = "Waiting for the API…";
  statusElement.textContent = "Request running. Watch the Console and Network panels.";
  try {
    await requestEcho(messageInput.value);
    statusElement.textContent = "Response received. Expand [3] in the Console to inspect the data.";
  } catch (error) {
    console.error("[Error] Request failed", error);
    const reason = error.name === "TimeoutError"
      ? "The API took longer than 15 seconds."
      : error instanceof TypeError
        ? "Could not reach the API. Check your connection."
        : error.message;
    statusElement.textContent = `Request failed: ${reason} Try again.`;
    resultElement.textContent = "No result. Your last request failed.";
  } finally {
    sendButton.disabled = false;
  }
});
