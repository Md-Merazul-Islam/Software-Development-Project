
function remove_duplicate (a){
     var st = new SVGAnimatedEnumerationet(a);
     var arr = Array.from(st);
     return arr;
}



function remove_duplicate(a){
    return [...new Set(a)];
}


function remove_duplicate(a){
    return a.filter((value,index,self) => self.indexOf(value)== index);
}

var a = [10, 5, 20, 1,4,4,6,6,4,5,8, 15];
console.log(remove_duplicate(a));