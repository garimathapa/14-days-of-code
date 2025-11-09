#Functions Challenge

Implement a function throttle(fn, delay) that returns a throttled version of the input function fn.

The throttled function should ensure that:
fn is only executed once every delay milliseconds, even if the throttled version is called multiple times during that period.
If multiple calls happen during the cooldown, only the last call’s arguments should be remembered and executed once the cooldown period ends.

Solution in JS

function throttle(fn, delay) {
  let lastCall = 0;
  let timerId = null;
  let lastArgs;

  return function (...args) {
    const now = Date.now();
    lastArgs = args;

    const remaining = delay - (now - lastCall);

    if (remaining <= 0) {
      if (timerId) clearTimeout(timerId);
      fn(...args);
      lastCall = now;
    } else {
      if (!timerId) {
        timerId = setTimeout(() => {
          fn(...lastArgs);
          lastCall = Date.now();
          timerId = null;
        }, remaining);
      }
    }
  };
}

---

Solution in TS

function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T>;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    lastArgs = args;
    const remaining = delay - (now - lastCall);

    if (remaining <= 0) {
      if (timerId) clearTimeout(timerId);
      fn(...args);
      lastCall = now;
    } else {
      if (!timerId) {
        timerId = setTimeout(() => {
          fn(...lastArgs);
          lastCall = Date.now();
          timerId = null;
        }, remaining);
      }
    }
  };
}
