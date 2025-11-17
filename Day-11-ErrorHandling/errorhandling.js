/* Problem Statement

Design a function safeJSONParse that takes any input and attempts to parse it as JSON.
If parsing succeeds, return the parsed value.

If parsing fails, throw a custom error class JSONParseError containing:
the original input
the original error message
Ensure the function never throws generic errors—only JSONParseError. */


class RetryError extends Error {
  constructor(attempts, lastError) {
    super(`Operation failed after ${attempts} attempts: ${lastError.message}`);
    this.name = "RetryError";
    this.attempts = attempts;
    this.lastError = lastError;
  }
}

async function retryAsync(fn, retries) {
  let error;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      error = e;
    }
  }
  throw new RetryError(retries, error);
}
