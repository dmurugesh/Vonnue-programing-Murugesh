// Question 54. Maximum number of handshakes ?
// max no of handshake is bascially the combination b/w persons can be represnted as nC2 .

maxHandshakes = num => {
    let lessnum = (parseInt(num) - 1);
    let max = ((num * lessnum) / 2);
    console.log('Max No. of handshake is ' + max);
}
maxHandshakes(10);