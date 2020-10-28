// Question 45 => Armstrong numbers between two intervals .

armstrongNumber = num => {
    let sum = 0, qotient = num;
    while (qotient != 0) {
        let reminder = qotient % 10;
        sum += (reminder ** 3);
        qotient = parseInt(qotient / 10);
    }
    if (num === sum) {
        console.log("given no is amstrong number " + num);
    }
}

rangeNum = (num1, num2) => {
    let largest = num1 > num2 ? num1 : num2;
    let smallest = num1 < num2 ? num1 : num2;
        for (let i = smallest; i <= largest; i++) {
            armstrongNumber(i);
        }
    }

rangeNum(400, 100);

