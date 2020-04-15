let readline = require("readline-sync");
const inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (i = 0; i < size; i++) {
        inputArray[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}
enterArrayElements(inputArray);

const printElements = array => {
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            console.log("The value at index " + i + " is " + inputArray[i]);
        }
    }
}
printElements(inputArray);
