//  3. Enter 2 strings and do the following operations
//   concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces / add a character after every specific letter

concatenate = (str1, str2) => {
    let result = (str1 + str2); 
    console.log('concatenate string : ' + result);
}

reverseStr = (str1, str2) => {
     str1 = str1.split('').reverse().join('');
     str2 = str2.split('').reverse().join('');
    console.log('Revese string 1 = ' + str1);
    console.log('Revese string 2 = ' + str2);
}

reverseConcat = (str1, str2) => {
    let result = (str1 + str2);  
    let split = result.split('').reverse().join('');
    console.log('ReverseConcat : ' + split);  
}

splitHalf = (str1, str2) => {
    let result = str1.length;  
    let out = parseInt(result / 2);
    let split = str1.slice(0, out);
    console.log('split half : ' + split);  
}

removeSpace = (str1, str2) => {
    let result = (str1 + str2); 
    result = result.split(' ').join('');
    console.log('Removed space : ' + result);
}

addLetter = (str1, str2) => {
    let result = (str1 + str2); 
    result = result.split('e').join('ez');
    console.log('Add Letter after o : ' + result);
}

mixLetter = (str1, str2) => {
    let a = (str1 + str2);
    let result = []; 
    for (let i = 0; i <= a.length; i++) {
        result.push(a[i]);
    }
    result = result.sort().join('');
    console.log('Mix Letter : ' + result);
}


stringInput = (str1, str2) => {
    concatenate(str1, str2);
    reverseStr(str1, str2);
    reverseConcat(str1, str2);
    removeSpace(str1, str2);
    splitHalf(str1, str2);
    addLetter(str1, str2);
    mixLetter(str1, str2);
}
stringInput("hellow" , " murugesh")