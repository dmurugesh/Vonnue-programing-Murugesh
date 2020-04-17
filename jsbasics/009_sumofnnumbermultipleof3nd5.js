// Question 9 => Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

let readline = require("readline-sync");
let n = readline.question("Enter the No. of element: ");

const findSum = num => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result = result + i;
        }
    }
    return result;
}
findSum(n);
console.log('The sum of N elements whose are multple of 3 & 5 :' + findSum(n))