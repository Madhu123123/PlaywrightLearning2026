//we can reduce/increase/maniplate Array

let score = [2,4,6,8];

let grades = score.map(s => s>5 ? "Pass" : "Fail");
console.log(grades);


let passing = score.filter(s => s>=7);
console.log(passing);



