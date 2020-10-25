// Question 10 => Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.>
// Option = 1 is for Product and Option = 2 is for Sum

const findSumorProduct = (option, num) => {
    if (option === 1) {
        let result = 0;
        for (let i = 1; i <= num; i++) {
            result = result + i;
        }
        return ('The sum of N elements : ' + result);
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result = result * i;
        }
        return ('The product of N elements : ' + result);
    }
}
let value = findSumorProduct(2, 5);
console.log(value);





