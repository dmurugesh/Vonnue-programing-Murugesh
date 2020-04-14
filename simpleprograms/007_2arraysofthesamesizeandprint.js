let readline = require("readline-sync");
let size = readline.question ("Enter the No. of element to store in Array: ");

const inputArray1 = [];
const inputArray2 = [];
for (i=0; i<size; i++) {
    inputArray1[i] = readline.question("Enter the Element " + (i+1) + " in the 1st Array : ");
    inputArray2[i] = readline.question("Enter the Element " + (i+1) + " in 2nd Array : ");
}
console.log(inputArray1);
console.log(inputArray2);
