// 65. Write a function that checks whether an element occurs in a list. ?

checkElement = (check) => {
    let list = ['Orange', 'Apple', 'Red', 'Yellow'];
    let a = list.indexOf(check);
    if (a === -1) {
        console.log('not present');
    } else {
        console.log('present');
    }
}
checkElement('Red');
