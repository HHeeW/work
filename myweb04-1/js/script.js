var ind = 1;
viewSlide(ind)
function gTime(){
    var dt = new Date();
    var yr = dt.getFullYear();
    var mth = dt.getMonth()+1;
    var gdt = dt.getDate();
    var hour = dt.getHours();
    var minu = dt.getMinutes();
    var sec = dt.getSeconds();
    document.getElementsByClassName('dt')[0].innerHTML = yr+"."+ mth+"."+ gdt + "<span>"+hour+"시 "+minu+"분 "+sec+"초</span>";
    };
function pSlide(n){
    viewSlide(ind += n);
}

setInterval(autoSlide, 5000);
setInterval(gTime, 1000);
function viewSlide(n){
    var i,slides;
    slides = document.getElementsByClassName("slidein");
    if(n > slides.length) ind = 1;
    if(n < 1) ind = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        slides[i].className = "slidein";
    }
 
    slides[ind-1].style.display = "block";
    slides[ind-1].className += " fade";
}

function autoSlide(){
    ind++;
    viewSlide(ind);
}