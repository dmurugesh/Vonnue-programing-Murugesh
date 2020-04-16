// Question 6 => Write a function to print all the elements whose value is a multiple of 3 and multiple of 5 ?

let readline = require("readline-sync");
let inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(array);
}

const squareArray = array => {
    for (let i = 0; i < array.length; i++) {
        array[i] *= array[i];
    }
    console.log(array);
}
enterArrayElements(inputArray);
squareArray(inputArray);