let score = 23;
let result1 = score>=70 ?"Pass" : "Fail"

//console.log(result1)


function getResult(score1)
{
    return score1 >= 35 ? "Pass" : "Fail"
    
}

getResult(66);

function greet1()
{
    console.log("Hi")
}

function greet(name)
{
    console.log("Hi", name)
}

greet1();
greet("Madhu")


function sayHello(name)
{
    return ("namaste");
}
console.log(sayHello("Madhu"));

const greet2 = (name2) => `Hello, ${name2}`;
console.log(greet2("Madhuu"))