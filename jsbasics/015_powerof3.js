// Question 15 => Write program to check if number is power of 3 of any number ?

powerOf = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = i ** 3;
        if (result === num) {
            console.log('This number can be writen as power 0f 3 : ' + i);
            return result;
        }
    }
    console.log("NUmber cannot be written as pwoer of 3")
}
powerOf(27);