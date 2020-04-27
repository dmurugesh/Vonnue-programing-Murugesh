// Queation 47 => Replace all 0's with 1 in a given integer ?

replaceNumber = num => {
    let result = 0;
    while (num > 0) {
        let reminder = num % 10;
            if (reminder === 0) {
                let temp = 1;
                reminder = (reminder + temp);
            }
        num = parseInt(num / 10);
        result = ((result * 10) + reminder);
    }
    console.log(result);
}
replaceNumber(01025);
