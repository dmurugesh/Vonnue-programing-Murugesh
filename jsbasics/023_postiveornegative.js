// Question 23 => Write a program to check a number is positive or negative

enteredNumber = num => {
    let result = parseInt(num);
    if (result >= 0) {
        console.log('Number is Postive');
    } else {
        console.log('Number is negative');
    }
}
enteredNumber(-1);