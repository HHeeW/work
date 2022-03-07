var deg = 0;
var secdeg = 0, mindeg = 0, hourdeg = 0;
for(i = 1; i <= 12; i++){
    deg += 30;
    document.getElementById("a"+ i).style.transform = 'rotate('+deg+'deg)';
}

setInterval(function(){
    var time = new Date();
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hour = time.getHours();
    secdeg = sec * 6;
    mindeg = min * 6;
    hourdeg = hour * 30;
    document.getElementById("Time").innerHTML = time.toLocaleTimeString();
    document.getElementById("Sec").style.transform = 'rotate('+secdeg+'deg)';
    document.getElementById("Min").style.transform = 'rotate('+mindeg+'deg)';
    document.getElementById("Hour").style.transform = 'rotate('+hourdeg+'deg)';
}, 1000);
