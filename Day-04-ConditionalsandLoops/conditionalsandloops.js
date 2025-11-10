// Problem Statement

// Write a program that takes an array of integers and filters out numbers based on the following conditions:
// If a number is divisible by 3, replace it with -1.
// If a number is divisible by 5, replace it with -2.
// If a number is divisible by both 3 and 5, replace it with -3.
// Otherwise, keep the number as it is.
// Use loops (for or while) and conditional statements (if/else) to solve this. Output the transformed array.

// Input array
let numbers = [1, 3, 5, 15, 16, 30, 7];

// Using for loop
let resultFor = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        resultFor.push(-3);
    } else if (numbers[i] % 3 === 0) {
        resultFor.push(-1);
    } else if (numbers[i] % 5 === 0) {
        resultFor.push(-2);
    } else {
        resultFor.push(numbers[i]);
    }
}
console.log("For loop result:", resultFor);

// Using while loop
let resultWhile = [];
let index = 0;
while (index < numbers.length) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
        resultWhile.push(-3);
    } else if (numbers[index] % 3 === 0) {
        resultWhile.push(-1);
    } else if (numbers[index] % 5 === 0) {
        resultWhile.push(-2);
    } else {
        resultWhile.push(numbers[index]);
    }
    index++;
}
console.log("While loop result:", resultWhile);
