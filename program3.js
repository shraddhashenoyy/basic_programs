//Factorial of a number

let yyy=parseInt(prompt("Enter the integar: "));
let fact=1;
for(let i=1;i<=yyy;i++)
{
    fact=fact*i;
}
console.log(`The factorial is ${fact}`);