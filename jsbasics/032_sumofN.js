// Question 32 => Sum of N natural numbers ?

sumNumber = num => {
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum = (sum + i)
    }
    return sum;
}
console.log(sumNumber(10));