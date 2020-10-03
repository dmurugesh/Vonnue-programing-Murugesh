// 71. Removing brackets from an algebraic expression

removeVowels = formula => {
    let str = formula;
    let bracket = '()';
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (bracket.indexOf(str[i]) === -1) {
            result.push(str[i]);
        }
    }
    console.log(result.join(''));
}

removeVowels('(a+b)-c)*l');