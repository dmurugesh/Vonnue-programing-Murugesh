//Question 68. Count the number of vowels ?

countVowels = string => {
    let str = String(string);
    let count = 0;
    let vowel = 'aeiouAEIOU';
    for(let i = 0; i <= string.length; i++) {
        if (vowel.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Prime'));