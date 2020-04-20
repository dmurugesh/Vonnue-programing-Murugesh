// Question 29 => Greatest of three numbers ?

greatesofThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if ( num2 >= num1 && num2 >= num3) {
        return num2;
    } else if ( num3 >= num1 && num3 >= num2) {
        return num3;
    } else {
        let str = "Three numbers are equal"
        return str;
    }
}
let result = greatesofThree(98, 99, 99);
console.log("The greatest of three numbers is " + result);