// Question 63. Write a function that returns the largest element in a list. 

largestElement = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(max) <= parseInt(array[i])) {
      max = parseInt(array[i]);
    }
  }
  return max;
}

let list = ['0', '95', '44', '5'];
console.log(largestElement(list)); 
