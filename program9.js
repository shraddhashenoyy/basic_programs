//whether the entered is vowel or consonant


const prompt=require('prompt-sync')();
let char=prompt("Enter the character: ");
if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
   {
    console.log(`${char} is vowel`);
    }else
        {
               console.log(`${char} is consonant`);
    
   }