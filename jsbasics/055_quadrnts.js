// Question 55. Quadrants in which coordinates lie ?

quardrant = (xcordinate, ycordinate) => {
    let xaxis = parseInt(xcordinate);
    let yaxis = parseInt(ycordinate);
        if (xaxis >= 0 && yaxis >= 0) {
            console.log('The x and y cordinates lies in first quadrant');
        } else if (xaxis >= 0 && yaxis < 0) {
            console.log('The x and y cordinates lies in second quadrant');
        } else if (xaxis < 0 && yaxis < 0) {
            console.log('The x and y cordinates lies in third quadrant');
        } else if (xaxis < 0 && yaxis >= 0) {
            console.log('The x and y cordinates lies in fourth quadrant');
        } 
}
quardrant(-1, 1);