//ASCII VALUE OF A CHARACTER

const prompt=require('prompt-sync')();
let string = prompt("Enter the String: ");
const result=string.charCodeAt(0);
console.log(`The ASCII Value is ${result}`);