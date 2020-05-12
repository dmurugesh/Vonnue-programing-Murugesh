// 74. Count the sum of numbers in a string. 

stringInput = (str) => {
    let sum = 0;
    str = str.replace(/[^0-9]/g, "");
    let num = parseInt(str);
    console.log(num);
    while (num >= 1) {
        sum += num % 10;
        num = Math.floor(num / 10);
     }
    console.log(sum);
}
stringInput("What is your 7 plan 8 9 ?");