// Questions 61. Roots of a quadratic equation ? 

quadratic = (a, b, c) => {
    let bc = parseFloat(b * -1);
    let b2 = parseFloat(b * b);
    let ac = parseFloat(4 * a * c);
    let dsc = parseFloat(b2 - ac);
    let sqrt = parseFloat(Math.sqrt(dsc));
    let deno = parseFloat(2 * a);
    if (sqrt <= 0) {
        let result = (bc / deno);
        console.log("the roots of qudratic equation is : " + result);
    } else if (sqrt > 0) {
        let result1 = ((bc + sqrt) / deno);
        console.log("the roots of qudratic equation are : " + result1);
        let result2 = ((bc - sqrt) / deno);
        console.log("the roots of qudratic equation is : " + result2);
    } else {
        console.log('Square roots not defined hence output is imaginary');
    }
}
quadratic(2,4,2);