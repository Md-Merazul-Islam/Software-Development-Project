var name = ["Rohim","Korima","kabbir","AlaUddin"]

var ans= 0;
for (var i=0; i<name.length; i++){
     ans = Math.max(ans,name[i].length);
}
console.log(ans);
for (var i=0; i<name.length; i++){
     if(ans== name[i].length){
        console.log(name[i]);
        break;
     }
}