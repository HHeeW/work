function openNav(){
    document.getElementById("mynav").style.left="0%";
}
function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}

var num = 1;
function slide(n){
    if(n){
        document.getElementById("slide"+num).style.display ='none';
        num++;
        if(num == 3){num = 1;}
        document.getElementById("slide"+num).style.display = "block";
    }
    else{
        document.getElementById("slide"+num).style.display ='none';
        num--;
        if(num == 0){num = 2;}
        document.getElementById("slide"+num).style.display = "block";
    }
}
