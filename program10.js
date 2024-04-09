//Leap year or not

let year=parseInt(prompt("Enter the year: "));
if(year%400==0){
    console.log(`${year} is leap-year`);
}else
if(year%100==0){
    console.log(`${year} is not a leap-year`);
}
else
if(year%4==0){
    console.log(`${year} is leap-year`);
}else
{
    console.log(`${year} is not a leap-year`);
}
