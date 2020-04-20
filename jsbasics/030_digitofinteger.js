// Question 30 => Number of digits in an integer ?

integerCount = num => {
    let count = 0;
    if (num >= 1) {
    count++; 
  }
    while (num / 10 >= 1) {
      num = (num / 10);
      count++;
    }
    return count;
  }
  console.log(integerCount(12112));