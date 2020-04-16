// Question 5 => Write a function to print all the elements whose value is a multiple of 3 and multiple of 5 ?

let readline = require("readline-sync");
const inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}

const printElements = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0 ) {
            console.log("The value at index " + i + " is " + array[i]);
        }
    }
}
enterArrayElements(inputArray);
printElements(inputArray);