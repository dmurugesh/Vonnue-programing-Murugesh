// QUestion 36 => Fibonacci series up to n ?

fibonacci = num => {
    let num1 = 0, num2 = 1, swap = 0;
    while (num2 <= num) {
        swap = num1 + num2;
        num1 = num2;
        num2 = swap;
        console.log(num1);
    }
}
fibonacci(10);