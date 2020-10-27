// Question 18 =>  Write a program that prints the next 20 leap years.
// num is defined as the present year

leapYear = num => {            
    let count = 0;
    while (count < 20) {
        if (((num % 4 == 0) && (num % 100 != 0)) || (num % 400 == 0)) {
            console.log("Leap year : " + num);
            count++;
        }
        num++;
    }
}

leapYear(2020);
