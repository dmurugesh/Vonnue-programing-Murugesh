// Question 57. Number of days in a given month of a given year ?
/*
Method 1
daysMonth = num => {
    if (num / 2 === 1) {
        console.log('28 Days');
    } else if (num / 2 === 4) {
        console.log('31 Days');
    } else if (num % 2 === 0) {
        console.log('30 Days');
    } else {
        console.log('31 Days');
    }
}
daysMonth(2);
*/

 // Method 2 using get date function

daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(2020, 4));