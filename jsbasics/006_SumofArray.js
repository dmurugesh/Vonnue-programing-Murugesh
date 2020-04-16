// Question 6 => Find the sum of elements in a given array. Array should be an input to the program?
let readline = require("readline-sync");
var inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (i = 0; i < size; i++) {
        inputArray[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}


const summofArray = array => {
    let total = 0;                                             
    for (i = 0; i < inputArray.length; i++) {
        total = parseInt(total) + parseInt(inputArray[i]);
    }
    console.log(' Sum of Array :' + total);
}
enterArrayElements(inputArray);                          // print to see the entered array
summofArray(inputArray);                                 //function declared to find sum of array
