// Question 8 => Write a program to compare the current item in the array to the next item and print if they are equal or not ?

let readline = require("readline-sync");
var inputArray = [];

//using one fucntion only since the while entering itself it ompares with previous element
const enteredArrayEqual = array => {                        
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
        if (array[i] == array[i - 1]) {
            console.log("the number is equal to the previous one ");
        } else {
            console.log("NUmber is not equal ");
        }
    }
    console.log(array);
}
enteredArrayEqual(inputArray); 
