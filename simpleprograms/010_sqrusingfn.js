// Quesiton 10 => Write a function to print the square of a number and call this function for each element of an array?

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
        console.log(array[i] ** 2);
    }
}

enterArrayElements(inputArray);
squareArray(inputArray);
