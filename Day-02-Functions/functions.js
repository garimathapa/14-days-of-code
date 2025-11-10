// Problem Statement

// Write a function that takes a positive integer n and returns the sum of the squares of all even numbers from 1 to n.

function sumOfEvenSquares(n) {
  if (n < 1) return 0;
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i * i;
  }
  return sum;
}

console.log(sumOfEvenSquares(6)); // Output: 56
