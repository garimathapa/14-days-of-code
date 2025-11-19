/* Problem Statement

Create a generic Result<T, E> type that models a computation which can either succeed (Ok<T>) or fail (Err<E>).
Implement helper functions ok, err, and match that allow pattern-matching behavior. Then use this type to safely handle
the result of an asynchronous operation fetchData<T>() that may succeed with type T or fail with an error message. */

/**
 * @template T, E
 * @typedef {{ type: 'ok', value: T } | { type: 'err', error: E }} Result
 */

/** @template T @param {T} value @returns {Result<T, never>} */
function ok(value) {
  return { type: 'ok', value };
}

/** @template E @param {E} error @returns {Result<never, E>} */
function err(error) {
  return { type: 'err', error };
}

/**
 * @template T, E, R
 * @param {Result<T,E>} result
 * @param {{ ok: (v:T)=>R, err: (e:E)=>R }} handlers
 * @returns {R}
 */
function match(result, handlers) {
  return result.type === 'ok'
    ? handlers.ok(result.value)
    : handlers.err(result.error);
}

async function fetchData() {
  try {
    const res = await Promise.resolve({ id: 1, name: "Item" });
    return ok(res);
  } catch (e) {
    return err("Failed to fetch");
  }
}

// usage
fetchData().then(result =>
  match(result, {
    ok: v => console.log("Success:", v),
    err: e => console.error("Error:", e)
  })
);
