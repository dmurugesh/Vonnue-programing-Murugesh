let readline = require("readline-sync");
var inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (i = 0; i < size; i++) {
        inputArray[i] = readline.question("Enter the Element " + (i + 1) + " : ");
        console.log(inputArray);
        if (inputArray[i] == inputArray[i - 1]) {
            console.log("the number is equal to the previous one ");
        } else {
            console.log("NUmber is not equal ");
        }
    }
}
enterArrayElements(inputArray); 
