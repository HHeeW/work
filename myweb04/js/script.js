function openNav(){
    document.getElementById("mynav").style.left="0%";
}
function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}

var ind = 1;
viewSlide(ind)
function pSlide(n){
    viewSlide(ind += n);
}
function viewSlide(n){
    var i,slides;
    slides = document.getElementsByClassName("slidein");
    if(n> slides.length) ind = 1;
    if(n<1) ind = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[ind-1].style.display = "block";
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
