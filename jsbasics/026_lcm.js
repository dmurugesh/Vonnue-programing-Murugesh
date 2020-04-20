// Question 26 => LCM of two numbers? 
// LCM least common multiple if 8, 6 are numbers 8*3(i) = 6*4(j), hence lcm

findLcm = (num1, num2) => {
  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      let lcm1 = (num1 * j);
      let lcm2 = (num2 * i);
      if (lcm1 === lcm2) {
        return lcm1;
      }
    }
  }
}
result = findLcm(40, 29);
console.log('The LCM of both the numbers are : ' + result);
