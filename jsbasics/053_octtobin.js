// Questions 53. Octal to binary conversion ?
// 1. below is radix table used for conersion used for conversion any binary/octal/hexa to decimal value
/* 2. Radix	Name
    2	    Binary numeral system
    8	    Octal system
    10	    Decimal system
    16	    Hexadecimal system

 3. let dec = parseInt(num, 2).toString(10); where (num, 2) is the radix(2) as input & .tostring(radix) enter the radix value to converted
*/

octalToBinary = num => {
    let dec = parseInt(num, 8).toString(2) ;
    console.log(dec); 
}
octalToBinary(11);


