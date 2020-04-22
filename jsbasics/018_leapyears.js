// Question 18 =>  Write a program that prints the next 20 leap years.
// num is defined as the present year

leapYear = num => {           
    let upto = parseInt(num) + 20;
    for (let i = num; i <= upto; i++) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
            console.log("Leap year : " + i);
        }
    }
}
leapYear(2020);
