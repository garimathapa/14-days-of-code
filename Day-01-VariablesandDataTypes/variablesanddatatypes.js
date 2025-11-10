// Problem Statement

// You are given a mixed array of values (numbers, strings, booleans, null, undefined, objects, arrays, etc.).  
// Write a function summarizeDataTypes(input) that returns an object summarizing how many of each data type appear in the array.

function summarizeDataTypes(input) {
  const summary = {};

  for (const item of input) {
    let type;

    // Handle special cases first
    if (item === null) {
      type = "null";
    } else if (Array.isArray(item)) {
      type = "array";
    } else {
      type = typeof item;
    }

    summary[type] = (summary[type] || 0) + 1;
  }

  return summary;
}