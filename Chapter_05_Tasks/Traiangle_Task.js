let sideA = 30;
let sideB = 40;
let sideC = 50;

if (sideA === sideB && sideB === sideC) {
    console.log("triangle is equilateral");
}
else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("triangle is isosceles : exactly two sides are equal");
}
else {
    console.log("no sides are equal"); 
}

console.log("Result: scalene triangle"); 
