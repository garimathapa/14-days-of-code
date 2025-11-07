function summarizeDataTypes(input) {
  const summary = {};
  for (const value of input) {
    let type = typeof value;
    if (value === null) type = 'null';
    summary[type] = (summary[type] || 0) + 1;
  }
  return summary;
}

// Example input
const input = [42, 'hello', true, null, undefined, { a: 1 }, [1, 2], 99, false];
console.log(summarizeDataTypes(input));