const prompt = require("prompt-sync")();
let n = prompt("Enter your  number : ");
if(n <0 || n%4!=0){
    console.log("It's not a  leap year");
}
else 
    console.log("This number is a leap year");