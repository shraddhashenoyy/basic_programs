//Power of a number(Using prompt)

const prompt=require('prompt-sync')();
let base=parseInt(prompt("Enter the base:"));
let exp=parseInt(prompt("Enter the exponent: "));
let result=Math.pow(base,exp);
console.log(`The Result is ${result}`);