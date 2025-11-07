function summarizeDataTypes(input: unknown[]): Record<string, number> {
  const summary: Record<string, number> = {};
  for (const value of input) {
    let type = typeof value;
    if (value === null) type = 'null';
    summary[type] = (summary[type] || 0) + 1;
  }
  return summary;
}

const input: unknown[] = [42, 'hello', true, null, undefined, { a: 1 }, [1, 2], 99, false];
console.log(summarizeDataTypes(input));