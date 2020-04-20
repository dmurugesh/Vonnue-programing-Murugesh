// Question 28 => Greatest of two numbers

greatestOfTwo = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        let num = "Both number are equal";
        return num;
    }
}
let result = greatestOfTwo(22, 22);
console.log('The greatest number is ' + result);