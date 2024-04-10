//Simple Calculator
const prompt=require('prompt-sync')();
const operator = prompt("ENTER THE OPERATOR(either +,-,* or /)");
const num1=parseFloat("Enter number1: ");
const num2=parseFloat("Enter number2: ");
let result;


if(operator=='+'){
    result=num1+num2;
}
else if(operator=='-'){
    result=num1-num2;
}
else if(operator=='*'){
    result=num1*num2;
}
else {
    result=num1/num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);