// Question 66. Length of the string without using strlen() function ?

stringLength = string => {
     let count = 0; 
     for(let i = 0; i < string.length; i++) {
         count++;
     }
     console.log(count);
}

let Inputstring = "Hey how are you"
stringLength(Inputstring);
