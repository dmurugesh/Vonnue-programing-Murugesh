// Question 44 => Prime numbers in a given range ?

primeNumber = (num1, num2) => {
    let largest = num1 > num2 ? num1 : num2; 
    let smallest = num1 < num2 ? num1 : num2; 
    for (let i = smallest; i <= largest; i++) {
            let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        } 
        if (isPrime)  console.log(i); 
    }
}

primeNumber(20, 10);
