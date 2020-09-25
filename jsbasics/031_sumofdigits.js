// Question 31 => Sum of digits of a number ?

sumOfDigit = num => {
    let sum = 0;
    while (num >= 1) {
        sum += num % 10;
        num = Math.floor(num / 10);
     }
     console.log('Sum of digit = ' + sum);
}
sumOfDigit(595);

/*
Output :  Sum of digit = 19 (Input => 595) 
*/
