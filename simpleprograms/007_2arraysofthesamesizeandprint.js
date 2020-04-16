// Question 7 => Declare 2 arrays of the same size and print the values of both using one for loop ?

let readline = require("readline-sync");
const inputArray1 = [];
const inputArray2 = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        inputArray1[i] = readline.question("Enter the Element " + (i + 1) + " in the 1st Array : ");
        inputArray2[i] = readline.question("Enter the Element " + (i + 1) + " in 2nd Array : ");
    }
    console.log(inputArray1);
    console.log(inputArray2);
}
enterArrayElements(inputArray1, inputArray2);
