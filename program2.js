//swapping two numbers entered by users
//Method-1
let x = parseInt(prompt("Enter number1: "));
let y = parseInt(prompt("Enter number2: "));
let temp;
console.log(`Before swap the patterns are ${x} and ${y}`);
temp=x;
x=y;
y=temp;
console.log(`After swap the patterns are ${x} and ${y}`);

//Method-2
let x1= parseInt(prompt("Enter number1: "));
let y1= parseInt(prompt("Enter number2: "));
console.log(`Before swap the patterns are ${x1} and ${y1}`);
x=x+y;
y=x-y;
x=x-y;
console.log(`After swap the patterns are ${x1} and ${y1}`);