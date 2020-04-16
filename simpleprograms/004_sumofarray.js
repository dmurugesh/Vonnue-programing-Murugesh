let readline = require("readline-sync");
var inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}
enterArrayElements(inputArray);                          // print to see the entered array

const summofArray = array => {
    let total = 0;                                              //function declared to find sum of array
    for (let i = 0; i < array.length; i++) {
        total = parseInt(total) + parseInt(array[i]);
    }
    console.log(' Sum of Array :' + total);
}
summofArray(inputArray);
