/* Problem Statement

You are given an array of asynchronous functions tasks, where each function returns
a Promise that resolves to a value after an unknown delay.
Implement an async function runWithConcurrency(tasks, limit) that executes the tasks with
a maximum concurrency of limit, preserving input order in the final result array.

All tasks must run, but no more than limit tasks may run at the same time.

The returned Promise must resolve to an array of results in the same order as tasks.

If any task rejects, the entire function must immediately reject with that error.

The function must not use external concurrency-control libraries.

Example usage (not part of the solution):

await runWithConcurrency([t1, t2, t3, t4], 2);
// → resolves results in order: [r1, r2, r3, r4] */


async function runWithConcurrency(tasks, limit) {
  const results = new Array(tasks.length);
  let index = 0;
  let active = 0;

  return new Promise((resolve, reject) => {
    const runNext = () => {
      if (index === tasks.length && active === 0) {
        return resolve(results);
      }

      while (active < limit && index < tasks.length) {
        const current = index++;
        active++;

        tasks[current]()
          .then(res => {
            results[current] = res;
            active--;
            runNext();
          })
          .catch(err => reject(err));
      }
    };

    runNext();
  });
}
