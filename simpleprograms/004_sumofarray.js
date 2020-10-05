// Question 4 => Write a function to find the sum of all elements of an array ?

let readline = require("readline-sync");
var inputArray = [];

const enterArrayElements = array => {
    let size = readline.question("Enter the No. of element to store in Array: ");
    for (let i = 0; i < size; i++) {
        array[i] = readline.question("Enter the Element " + (i + 1) + " : ");
    }
    console.log(inputArray);
}

const summofArray = array => {
    let total = 0;                                             
    for (let i = 0; i < array.length; i++) {
        total = parseInt(total) + parseInt(array[i]);
    }
    console.log(' Sum of Array :' + total);
}

enterArrayElements(inputArray);                             // print to see the entered array
summofArray(inputArray);                                   // function declared to find sum of array

