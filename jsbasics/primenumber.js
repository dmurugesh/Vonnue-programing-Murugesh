let readline = require("readline-sync");
let num = readline.question("Enter the NUmber"); 

const testPrime = num =>
{
  if (num === 1)   // if num = 1 it is not a prime
  {
    return false;  //break  false 
  } else if(num === 2) {
    return true;  
   } else {
     for(let x = 2; x < num; x++)  {
       if(num % x === 0) {
         return false;
       }
     }
     return true;  
    }
 }

console.log('is the number Prime? ' , testPrime(num));