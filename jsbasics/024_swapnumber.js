// Question 24 =>  Write a program to Swap two numbers without third variable ? 

enteredNumbers = (num1, num2) => {
    num1 = (num1 + num2);
    num2 = (num1 - num2);
    num1 = (num1 - num2);
    console.log('the entered NUmbers are ' + num1 + ' ' + num2 + ' ');
}
enteredNumbers(3, 2);