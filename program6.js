//Multipliaction Table

const prompt=require('prompt-sync')();
let i=parseInt (prompt("Enter the integar: "));
let j;
let multi;
for(j=1;j<=10;j++)
{
    multi=i*j;
    console.log(`${i} * ${j} = ${multi}`);
    }