// Question 29 => Greatest of three numbers ?

greatesofThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if ( num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

let result = greatesofThree(91, 99, 95);
console.log("The greatest of three numbers is " + result);