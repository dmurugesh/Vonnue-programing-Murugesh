// Question 67. Toggle each character in a string

toggle = (string) => {
    let str = string;
    let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Lower = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i <= str.length; i++) {
       if (Upper.indexOf(str[i]) !== -1) {
           result.push(str[i].toLowerCase());
       } else if (Lower.indexOf(str[i]) !== -1) {
        result.push(str[i].toUpperCase());
    }
}
    console.log(result.join(''));
}
toggle('ZZazSs');

