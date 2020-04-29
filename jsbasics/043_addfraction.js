// Question 43 => Add two fractions

findGcd = (num1, num2) => {
    let gcd = 0;
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
           gcd = i * 1;
        }
    } 
    return gcd;
}

sumofNumber = (num1, num2, deno1, deno2) => {
    let opt1 = (parseInt(num1) * parseInt(deno2));
    let opt2 = (parseInt(num2) * parseInt(deno1));
    let deno = parseInt(deno1 * deno2);
    let neu = (opt1 + opt2);
    let simplfy = findGcd(neu, deno);                         // fucntion findGcd called
    let neumator = (neu / simplfy);
    let denominator = (deno / simplfy);
    console.log('Tsimplest form of fraction is : ' + neumator + '/' + denominator)
}
sumofNumber(11, 18, 7, 8);
