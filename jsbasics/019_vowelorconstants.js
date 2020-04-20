// Question 19 => Write a program to check if a character is a vowel or consonant
// .match(/[..]/) is used to chedched whethere the mentioned charater are present in input 

theinputCharacter = word => {
    if (word.match(/[aeiouAEIOU]/)) {
        console.log("The character" + " " + word + " " + "is a Vowel");
    } else {
        console.log("The character" + " " + word + " " + "is not a Vowel");
    }
}
theinputCharacter("A");