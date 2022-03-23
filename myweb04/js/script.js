var ind = 1;

window.addEventListener('scroll',function(){
    let nowScroll = document.scrollingElement.scrollTop;//탑 부터의 스크롤 값 확인
    if(nowScroll > 600){
        document.getElementById("top").style.display = 'flex';
    }
    if(nowScroll == 0){
        document.getElementById("top").style.display = 'none';
    }
    console.log(nowScroll);
});

function gTime(){
    var dt = new Date();
    var yr = dt.getFullYear();
    var mth = dt.getMonth()+1;
    var gdt = dt.getDate();
    var hour = dt.getHours();
    var minu = dt.getMinutes();
    var sec = dt.getSeconds();
    document.getElementsByClassName('dt')[0].innerHTML = yr+"."+ mth+"."+ gdt + " <span> "+hour+"시 "+minu+"분 "+sec+"초</span>";
    };


function slide(n){
    if(n){
        document.getElementById("slide"+ind).style.display ='none';
        ind++;
        if(ind == 6){ind = 1;}
        document.getElementById("slide"+ind).style.display = "block";
    }
    else{
        document.getElementById("slide"+ind).style.display ='none';
        ind--;
        if(ind == 0){ind = 5;}
        document.getElementById("slide"+ind).style.display = "block";
    }
}
setInterval(autoSlide, 5000);
setInterval(gTime, 500);

function autoSlide(){
    document.getElementById("slide"+ind).style.display ='none';
    ind++;
    if(ind == 6){ind = 1;}
        document.getElementById("slide"+ind).style.display = "block";
}