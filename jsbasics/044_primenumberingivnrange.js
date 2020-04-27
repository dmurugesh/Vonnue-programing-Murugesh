// Question 44 => Prime numbers in a given range ?

primeNumber = (num1, num2) => {
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) console.log(i);
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) console.log(i);
        }
    }
}
primeNumber(20, 10);
