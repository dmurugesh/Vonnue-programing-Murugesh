let readline = require("readline-sync");
let inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the size of Array : ");
    for (i = 0; i < size; i++) {
        inputArray[i] = readline.question("Enter the " + (i + 1) + "Elment: ");
    }
    console.log("Enter Array :" + inputArray);
    inputArray.forEach((value, index) => {
        inputArray[index] *= inputArray[index];          // used to multiple each elment in array with itself
    });
    console.log(inputArray);
}
enterArrayElements(inputArray);