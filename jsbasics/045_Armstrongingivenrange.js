// Question 45 => Armstrong numbers between two intervals .

armstrongNumber = num => {
    let sum = 0, qotient = num;
    while (qotient != 0) {
        let reminder = qotient % 10;
        sum += (reminder ** 3);
        qotient = parseInt(qotient / 10);
    } if (num === sum) {
        console.log("given no is amstrong number " + num);
    }
}

rangeNum = (num1, num2) => {
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            armstrongNumber(i);
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            armstrongNumber(i);
        }
    }
}
rangeNum(400, 100);

