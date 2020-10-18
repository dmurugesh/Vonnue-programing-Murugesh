// Question 42 => Find all Factors of a number

factor = num => {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log('Factor of the number ' + num + '  : ' + i);
        }
    }
}

factor(10);
