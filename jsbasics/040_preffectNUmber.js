// Question 40 => Perfect number or not ?

perfectNUmber = num => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log('The Number is a Perfect Number : ' + sum);
    } else {
        console.log("The number is not a perfect nnumber");
    }
}
perfectNUmber(10);