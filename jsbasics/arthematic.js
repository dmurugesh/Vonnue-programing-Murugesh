const readline = require("readline-sync");
const num1 = readline.question("enter first Number :");   //terminal to need first number
const num2 = readline.question("Enter second Number :");  //terminal to need second number

const add = (a, b) => {
    sum = parseInt(a)+parseInt(b)                      //pareInt() - parses a string and returns an integer.
    console.log( "The Sum :" , sum);
}

const substract = (b, c) => {
    let differrence = b - c;
    console.log("The difference is", differrence);
}

const multiply = (d, e) =>  {
    let product = d * e;
    console.log("The product is", product);
}

const devide = (f, g) => {
    let quotient = f / g;
    console.log("The quotient is", quotient);
}

const modulus = (h, i) => {
    let remainder = h % i;
    console.log("The remainder", remainder);
}

const compare = (p, q) => {
    if (p > q) {
        console.log("The larger value is", p);   
    } else if (p === q) {
        console.log("Both numbers are equal")
    } else {
        console.log("The larger value is ",q)
    }
}


add(num1, num2);
substract(num1, num2);
multiply(num1, num2);
devide(num1, num2);
modulus(num1, num2);
compare(num1, num2);

