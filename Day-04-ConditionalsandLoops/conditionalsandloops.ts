// Problem Statement

// Write a program that takes an array of integers and filters out numbers based on the following conditions:
// If a number is divisible by 3, replace it with -1.
// If a number is divisible by 5, replace it with -2.
// If a number is divisible by both 3 and 5, replace it with -3.
// Otherwise, keep the number as it is.
// Use loops (for or while) and conditional statements (if/else) to solve this. Output the transformed array.

// Strongly typed array
let numbersTS: number[] = [1, 3, 5, 15, 16, 30, 7];

// For loop with strong typing
let resultForTS: number[] = [];
for (let i: number = 0; i < numbersTS.length; i++) {
    let num: number = numbersTS[i];
    if (num % 3 === 0 && num % 5 === 0) {
        resultForTS.push(-3);
    } else if (num % 3 === 0) {
        resultForTS.push(-1);
    } else if (num % 5 === 0) {
        resultForTS.push(-2);
    } else {
        resultForTS.push(num);
    }
}
console.log("For loop TS result:", resultForTS);

// While loop with strong typing
let resultWhileTS: number[] = [];
let indexTS: number = 0;
while (indexTS < numbersTS.length) {
    let num: number = numbersTS[indexTS];
    if (num % 3 === 0 && num % 5 === 0) {
        resultWhileTS.push(-3);
    } else if (num % 3 === 0) {
        resultWhileTS.push(-1);
    } else if (num % 5 === 0) {
        resultWhileTS.push(-2);
    } else {
        resultWhileTS.push(num);
    }
    indexTS++;
}
console.log("While loop TS result:", resultWhileTS);
