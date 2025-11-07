# Data Type & Variable Challenge

## Problem Statement
You are given a mixed array of values (numbers, strings, booleans, null, undefined, objects, arrays, etc.).  
Write a function `summarizeDataTypes(input)` that returns an object summarizing **how many of each data type** appear in the array.

### Example

```js
const input = [42, 'hello', true, null, undefined, { a: 1 }, [1, 2], 99, false];
console.log(summarizeDataTypes(input));
