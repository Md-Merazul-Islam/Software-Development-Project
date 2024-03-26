
function even_array(num){
    return num.filter(i=> i%2==0);
}

var num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newarray = even_array(num);
console.log(newarray);


