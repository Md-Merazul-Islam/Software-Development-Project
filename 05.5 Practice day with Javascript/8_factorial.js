
function factorial(n){
    var i=1,fact =1;
    while(i<=n){
        fact*=i;
        i+=1;
    }
    return fact;
}

function factorial(n){
    if(n==0 || n==1)return 1;
    else return n*factorial(n-1);
}



const prompt = require("prompt-sync")();
let n = prompt("Enter you number : ")
console.log(factorial(n));