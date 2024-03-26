

function chk(a,b){
    var arr=[]
    for (var i=0; i<a.length; i++)
    {
        for (var j=0; j<b.length; j++){
            if(a[i]==b[j]){
                arr.push(a[i]);
            }
        }
    }

    return arr;
}


function chk(a,b){
    return a.filter (i => b.includes(i));
}



var a = [1,2,3,4,6,7,9];
var b = [1,3,6,7,5,8,9];

console.log((chk(a,b)));
