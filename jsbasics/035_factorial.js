// Question 35 => Factorial of a number ?

factorial = num => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {   
        fact = fact * i;
    }
    return fact;
}
console.log("The factorial is : " + factorial(6));


