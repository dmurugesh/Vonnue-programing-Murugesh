// Question 10 => Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.>
// Option = 1 is for Product and Option = 2 is for Sum

const findSumorProduct = (option, num) => {
    if (option === 1) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result = result * i;
        }
        return result;
    } else {
        let result = 0;
        for (let i = 1; i <= num; i++) {
            result = result + i;
        }
        return result;
    }
}
findSumorProduct(1, 5);
console.log('The sum of N elements :' + findSumorProduct(1, 5));





