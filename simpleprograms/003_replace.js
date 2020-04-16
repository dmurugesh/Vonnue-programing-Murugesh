// Question 3 => Write a function to replace all the elements of an array with 0 ?

let readline = require("readline-sync");
let inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(array);
}

const replaceArray = array => {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 0;
    }
    console.log(array);
}
enterArrayElements(inputArray);
replaceArray(inputArray);

