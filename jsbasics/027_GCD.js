// Question 27 => GCD of two numbers ? 

findGcd = (num1, num2) => {
    let gcd = 0;
    if (num1 > num2) {
    for (let i = 1; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
           gcd = i * 1;
        }
    } 
    return gcd;
} else { 
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
           gcd = i * 1;
        }
    } 
    return gcd;
}
}
result = findGcd(180, 120);
console.log('The LCM of both the numbers are : ' + result);