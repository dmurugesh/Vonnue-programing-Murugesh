// Question 11 => Write a program that prints a multiplication table for numbers up to 12.

const multiplicationTable = () => {
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 10; j++) {
      result = i * j;
      console.log(i + ' * ' + j + ' = ' + result);
    }
    console.log('Multiplication table of ' + (i + 1));
  }
}
multiplicationTable();