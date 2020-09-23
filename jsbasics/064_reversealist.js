// Question 64. Write function that reverses a list, preferably in place. ?

reverseList = array => {
    var output = [].concat(array).reverse();
     console.log(output);
}

let list = ['0', '4', '89', '55'];
reverseList(list);
