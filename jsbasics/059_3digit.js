// Question 59. Number of times digit 3 occurs in each and every number from 0 to n ?
/* Algoritham
 1. Input the number n from the user.
 2. Initialize count = 0.
 3. Repeat for all numbers from o to n.
 4. Find if num % 10 == 3
 5. Increment count
 6. Divide the number by 10 and from step 4.
 7. Return count */

digitThree = num => {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        let temp = i;
        while (temp > 0) {
            let re = (temp % 10);
            if (re === 3) {
                count++;
            }
            temp = parseInt(temp / 10);
        }
    }
    console.log(count);
}
digitThree(1000);

