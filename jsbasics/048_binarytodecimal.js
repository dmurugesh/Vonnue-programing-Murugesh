// Question 48. Binary to decimal conversion ?
//below is radix table used for conersion used for conversion any binary/octal/hexa to decimal value
/* Radix	Name
    2	    Binary numeral system
    8	    Octal system
    10	    Decimal system
    16	    Hexadecimal system 
let dec = parseInt(num, 2).toString(10); where (num, 2) is the radix(2) as input & .tostring(radix) enter the radix value to converted
*/

binaryToDecimal = num => {
     let dec = parseInt(num, 2).toString(10);
     console.log(dec); 
}

binaryToDecimal(1001);
