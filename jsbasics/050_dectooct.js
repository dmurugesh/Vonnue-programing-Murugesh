// Question 50. Decimal to octal conversion ?
// 1. below is radix table used for conersion used for conversion any binary/octal/hexa to decimal value
/* 2. Radix	Name
    2	    Binary numeral system
    8	    Octal system
    10	    Decimal system
    16	    Hexadecimal system

 3. let dec = parseInt(num, 2).toString(10); where (num, 2) is the radix(2) as input & .tostring(radix) enter the radix value to converted
*/

decimalToOctal = num => {
    let oct = parseInt(num, 10).toString(8) ;
    console.log(oct); 
}
decimalToOctal(10);