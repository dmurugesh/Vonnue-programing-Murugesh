// Question 14 => Write program to check if number can be expressed as sum of squares of two whole numbers?

const sumofSquare = num => {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            let result = ((i * i) + (j * j));
            if (result === num) {
                console.log('the number can be writen as sum of squares of ' + i + ' & ' + j + ' = ' + result);
                return result;
            }
        }
    }
    console.log("Number cannot be return as sum of squares");
}
sumofSquare(25);
