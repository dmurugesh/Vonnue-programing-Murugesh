// Question 8 => Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
let readline = require("readline-sync");
let number = readline.question("Enter the No. of element: ");

const findSum = num => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
            result = result + i;
    }
    return result;
}

findSum(number);
console.log('The sum of N elements :' + findSum(number));
