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

const outputArray = array => {
    let outputArray = array.reverse();
    console.log("the reverse of array : [ " + outputArray + " ]");
}
outputArray(inputArray);