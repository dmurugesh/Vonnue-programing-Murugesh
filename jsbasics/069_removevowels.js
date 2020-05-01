//Question 69. Remove vowels from a string ?

removeVowels = string => {
    let str = string;
    let vowels = 'aeiouAEIOU';
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
            result.push(str[i]);
        } 
    }
    console.log(result.join(''));
} 
removeVowels('Prime');