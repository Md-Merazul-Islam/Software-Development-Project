function sum (num=[]){
    var ans =0;
    for (var i=0; i<num.length; i++)
    {
        ans+= num[i];
    }
    return ans;
}

var num=[1,2,5];
console.log(sum(num));