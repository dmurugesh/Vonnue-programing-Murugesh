let readline = require("readline-sync");

let str = readline.question("enter word: ");    // use to enter user input word

const palindrome = str => 
{                                                        // tolowercase - use to convert into lowerstring., replace() - return matches of a pattern replaced by a replacement
   str = str.toLowerCase().replace(/[^a-z]+/g,"");     //  ,"" remove spaces, /[^a-z] - convert the string into lowercase, 

   if (str === str.split("").reverse().join(""))
   {
      console.log("The given word is Palindrome: ", str);
    } 
      else 
        { 
          console.log("the given word is not Palindrome: ", str); 
        }
}

palindrome(str);