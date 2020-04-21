// Question 33 => Sum of numbers in a given range ? 

sumNumber = (num1, num2) => {
    let sum = 0;
    if (num2 > num1) {
        for (i = num1; i <= num2; i++) {
            sum = (sum + i);
        }
    } else {
        for (i = num2; i <= num1; i++) {
            sum = (sum + i);
        }
    }
    return sum;
}
console.log(sumNumber(51, 100));