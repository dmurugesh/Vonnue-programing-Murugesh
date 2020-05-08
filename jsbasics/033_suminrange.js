// Question 33 => Sum of numbers in a given range ? 

sumNumber = (num1, num2) => {
    let sum = 0;
    let largest = num1 > num2 ? num1 : num2;
    let smallest = num1 < num2 ? num1 : num2;
        for (i = smallest; i <= largest; i++) {
            sum = (sum + i);
        }
    return sum;
}

console.log(sumNumber(51, 100));