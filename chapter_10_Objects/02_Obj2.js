let config = {};
config.browser = "Chrome";
config.timeout = 3000;
console.log(config);

//call by value
let a = 10;
let b = a;
b = 66;
console.log(a) // 10 only 

//call by reference
let obj1 = {val: 10};
let obj2 = obj1;
obj2.val = 30;
console.log(obj1)