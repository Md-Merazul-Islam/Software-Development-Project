const prompt = require ("prompt-sync")()
let n = prompt("Enter your num: ")

for (var i = 1; i <= n; i++) {
    if(i%3==0 || i%5==0)
    console.log(i);
}