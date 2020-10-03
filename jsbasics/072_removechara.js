// 72. Remove characters in a string except alphabets

stringInput = (input) => {
    str = input;
    str = str.replace(/[^A-z]/g, "");
    console.log(str);
}
stringInput("MuruGesH7 8 5@a");