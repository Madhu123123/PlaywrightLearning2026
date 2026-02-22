//&& --> And operator
//|| --> Or operator
//! --> Not operator

let a = 5;
let b = 10; 
console.log(a > 0 && b > 0); // Output: true
console.log(a > 0 || b < 0); // Output: true
console.log(!(a > 0)); // Output: false

console.log(a > 0 && b < 0); // Output: false
console.log(a < 0 || b > 0); // Output: true
console.log(!(a < 0)); // Output: true
