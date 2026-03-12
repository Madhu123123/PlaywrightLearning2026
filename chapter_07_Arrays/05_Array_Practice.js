let arr = ['M1','M2','M3', 1,2,3];

console.log(arr.length);

let results = ["Pass", "Fail", "Pass", "Fail"  ]

let browsers = ["Chrome","FF","Opera","Edge"];

//let score = new array(3);
//let score1 = new array(1,2,3);

//access and modify
let status1 = ["Pass","Fail","Skip"];
console.log(status1.at(-1));

let s = [1,2,3,4];
s.push(5);
console.log(s);

s.pop();
console.log(s);

s.unshift(5);
console.log(s);

s.shift();
console.log(s);

s.splice(2,1);
console.log(s);

s.splice(2,1,99);
console.log(s);


let browser = ["Chrome","FF","Opera","Edge"];
for(let i=0; i<browser.length; i++)
{
    console.log(browser[i]);
}

let num = [12,20,35];
num.find(n => n>20);
console.log(num.find(n => n>20))
