
function isPalindrome (st)
{
   st = st.toLowerCase()
   let i =0;
   let j = st.length -1;
   while(i<j){
    if(st[i]!==st[j]){
        return "Is Not a Palindrome";
    }
    i++;j--;
   }
   return "Is Palindrome";
}

function isPalindrome (st)
{ 
    st = st.toLowerCase()
    if( st.back )
        return "Is Not a Palindrome";
  
   return "Is Palindrome";
}




const prompt = require("prompt-sync")();
let st = prompt("Enter you string : ")
console.log(isPalindrome(st));