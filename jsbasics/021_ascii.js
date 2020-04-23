// Question 21 => Write a program to check Ascii values of a character?

asciiValue = num => {
    let str = num;
    return str.codePointAt(0);
}
console.log(asciiValue('7'));