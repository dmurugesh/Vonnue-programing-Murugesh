const readline = require("readline-sync");
const str = readline.question("enter word: ");    // use to enter user input word

palindrome = str => {
  str = str.toLowerCase().replace(/[^a-z]+/g, "");    // tolowercase - use to convert into lowerstring., replace() - return matches of a pattern replaced by a replacement
  if (str === str.split("").reverse().join("")) {     //  ,"" remove spaces, /[^a-z] - convert the string into lowercase, 
    console.log("The given word is Palindrome: ", str);
  } else {
    console.log("the given word is not Palindrome: ", str);
  }
}

palindrome(str);
