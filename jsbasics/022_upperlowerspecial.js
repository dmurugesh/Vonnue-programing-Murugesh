// Question 22 => Write a program to check Uppercase, Lowercase or special character ?

theinputCharacter = str => {
    if (str.match(/[A-Z]/)) {
        console.log("The entered string" + " '" + str + "' " + "is a Uppercase");
    } else if (str.match(/[a-z]/)) {
        console.log("The entered string" + " '" + str + "' " + "is a lowercase");
    } else if (str.match(/[0-9]/)) {
        console.log("The entered string" + " '" + str + "' " + "is a number");
    } else {
        console.log("The entered string" + " '" + str + "' " + "is a special Character");
    }
}
theinputCharacter("g");
