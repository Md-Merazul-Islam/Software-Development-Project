function isprime(n)
{
    n= parseInt(n);
    if(n<=1) return false;
    if(n==2) return true;
    if (n%2==0) return false;
    for (var i=3; i*i<=n; i+=2){
        if(n%i==0)return false;
    }
    return true;
}

const prompt = require ("prompt-sync")();
let n = prompt("Enter you input : ");
console.log(isprime(n));