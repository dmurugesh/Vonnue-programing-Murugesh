// Question 34 => Reverse a given number

inputNumber = num => {
    let temp = 0;
    while (num > 0) {
        let reminder = num % 10;
        num = parseInt(num / 10);
        temp = (temp * 10) + reminder;
    }
    console.log('reversed number is : ' + temp);
}
inputNumber(1234);  
