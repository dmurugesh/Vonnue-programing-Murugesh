// Queation 47 => Replace all 0's with 1 in a given integer ?

replaceDigit = num => {
    let sum = 0;
    let result = 0;
    while (num >= 1) {
        reminder = num % 10;
        if (reminder === 0) {
            let temp = 1;
            reminder = (reminder + temp);
        }
        num = Math.floor(num / 10);
        result = ((result * 10) + reminder);
    }
    console.log(result);
}

replaceDigit(505);

