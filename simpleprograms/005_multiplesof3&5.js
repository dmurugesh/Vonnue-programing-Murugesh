let readline = require("readline-sync");
const inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}
enterArrayElements(inputArray);

const printElements = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0) {
            console.log("The value at index " + i + " is " + array[i]);
        }
    }
}
printElements(inputArray);