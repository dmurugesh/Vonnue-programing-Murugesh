// Question 60 => Number of integers which has exactly 9 divisors ?
/* Algoritham
 1. Input the range numbers from the user.
 2. Initialize count = 0.
 3. check the divsor of the each number b/w range
 4. Find if num % i == 0 and has extact 9 divsor
 5. If so Increment count
 6. Repeat for all numbers from o to n.
 7. Return count */

nineDivsor = num => {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        let s = (num % i);
        if (s === 0) {
            count++;
        }
    }
    if (count === 9) {
        console.log('This number has 9 divsors : ' + num);
    }
}

rangeNum = (num1, num2) => {
    if (num2 > num1) {
        for (let j = num1; j <= num2; j++) {
            nineDivsor(j);
        }
    } else {
        for (let j = num2; j <= num1; j++) {
            nineDivsor(j);
        }
    }
}
rangeNum(1, 100);