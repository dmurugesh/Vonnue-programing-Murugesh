// Question 2 => Write a function to print all the elements whose index is a multiple of 2 ?

let readline = require("readline-sync");
const inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(array);
}

const printElements = array => {
    for (let i = 0; i < array.length; i+2) {
            console.log("The value at index " + i + " is " + array[i]);
    }
}

enterArrayElements(inputArray);
printElements(inputArray);
