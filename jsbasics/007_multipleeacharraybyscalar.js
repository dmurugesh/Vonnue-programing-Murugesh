// Question 7 => Multiple each element of an array with a constant and print the result ?
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
    let scalar = readline.question("Enter number to be multiplied with each elemnt :");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * scalar);
    }
}
enterArrayElements(inputArray);
squareArray(inputArray);            
