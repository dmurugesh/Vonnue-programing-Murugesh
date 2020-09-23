// Question 70. Sorting a string in alphabetical order?

sortingString = word => {
    str = word.toString();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    let sortedstring = result.sort();
     sortedstring = sortedstring.join('');    
    console.log(sortedstring);
}
sortingString("badc");