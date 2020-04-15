let readline = require("readline-sync");
let n = readline.question("Enter the No. of element: ");

const findSum = num => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
            result = result + i;
    }
    return result;
}
findSum(n);
console.log('The sum of N elements :' + findSum(n));
