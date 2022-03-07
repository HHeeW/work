var deg = 0;
var secdeg = 0, mindeg = 0, hourdeg = 0;
for(i = 1; i <= 12; i++){
    deg += 30;
    document.getElementById("a"+ i).style.transform = 'rotate('+deg+'deg)';
}
// for(i = 1; i <= 72; i++){
//     deg += 6;
//     document.getElementById("b"+ i).style.transform = 'rotate('+deg+'deg)';
// }
// setInterval(function(){
//     secdeg +=6;
//     document.getElementById("sec").style.transform = 'rotate('+secdeg+'deg)';
// }, 1000);
setInterval(function(){
    mindeg +=1;
    document.getElementById("min").style.transform = 'rotate('+mindeg+'deg)';
}, 10000);
setInterval(function(){
    hourdeg +=1;
    document.getElementById("hour").style.transform = 'rotate('+hourdeg+'deg)';
}, 120000);