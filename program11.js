//Character is Alphabet or not

let character=prompt("Enter the character: ");
if(character>='a' && character<='z' ||character>='A' && character<='Z')
   {
    console.log(`${character} is Alphabet`);
   }
   else
   {
       console.log(`${character} is Not-Alphabet`);
   }