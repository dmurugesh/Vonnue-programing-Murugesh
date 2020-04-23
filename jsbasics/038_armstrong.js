// Question 38 => Armstrong number or not ?

armstrongNumber = num => {
    let sum = 0, qotient = num;
    while (qotient != 0) {
        reminder = qotient % 10;
        sum += (reminder ** 3);
        qotient = parseInt(qotient / 10);
    } if (num === sum) {
        console.log("given no is amstrong number");
    } else {
        console.log("given no is not an amstrong number");
    }
}
armstrongNumber(153);
