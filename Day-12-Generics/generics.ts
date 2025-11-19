/* Problem Statement

Create a generic Result<T, E> type that models a computation which can either succeed (Ok<T>) or fail (Err<E>).
Implement helper functions ok, err, and match that allow pattern-matching behavior. Then use this type to safely handle
the result of an asynchronous operation fetchData<T>() that may succeed with type T or fail with an error message. */

type Result<T, E> =
  | { type: "ok"; value: T }
  | { type: "err"; error: E };

const ok = <T>(value: T): Result<T, never> => ({ type: "ok", value });
const err = <E>(error: E): Result<never, E> => ({ type: "err", error });

function match<T, E, R>(
  result: Result<T, E>,
  handlers: { ok: (v: T) => R; err: (e: E) => R }
): R {
  return result.type === "ok"
    ? handlers.ok(result.value)
    : handlers.err(result.error);
}

async function fetchData<T>(): Promise<Result<T, string>> {
  try {
    const data = await Promise.resolve({ id: 1, name: "Item" } as T);
    return ok(data);
  } catch {
    return err("Failed to fetch");
  }
}

// usage
fetchData<{ id: number; name: string }>().then(result =>
  match(result, {
    ok: v => console.log("Success:", v),
    err: e => console.error("Error:", e),
  })
);
