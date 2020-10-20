// Question 20 => Write a program to check if a character is an alphabet or not ?
// word.match(/[A-Z a-z]/) used to check captial//small letter alphabet
// word.match(/[0-9]/) used to check the numbers in the string

theInputCharacter = word => {
    if (word.match(/[0-9]/)) {
        console.log("The character" + " '" + word + "' " + "is a Number");
    } else if (word.match(/[A-Z a-z]/)) {
        console.log("The character" + " '" + word + "' " + "is a alphabet");
    } else {
        console.log("The character" + " '" + word + "' " + "is a special Character");
    }
}

theInputCharacter("b");

