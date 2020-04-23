// Question 16 => Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

showPrimes = limit => {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}
showPrimes(15);

