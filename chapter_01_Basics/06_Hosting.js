console.log(a); // Output: "undefined"

var a = "Alice";

var d = 6;
d = 12;// This is allowed with 'var' and will not cause an error
var d = 18; // This is allowed with 'var' and will not cause an error

console.log(d); // Output: 18

let b = 5;
b = 10;
//let b = 15; // This will cause an error because 'b' has already been declared with 'let'

console.log(b); // Output: 10

const c = 3.14;
//c = 2.71; // This will cause an error because 'c' is a constant and cannot be reassigned
//const c = 2.71; // This will also cause an error because 'c' has already been declared with 'const'

console.log(c); // Output: 3.14

