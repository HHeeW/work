function srp(e){
    var str, img, img1;
    var me = ['가위', '바위', '보'];
    var c = Math.floor(Math.random()*3);
    switch(e){
        case 0:
            me='가위';
            img='images/sc.png';
        break;
        case 1:
            me='바위';
            img='images/ro.png';
        break;
        case 2:
            me='보';
            img='images/pa.png';
        break;
    }
    switch(c){
        case 0:
            me='가위';
            img1='images/sc.png';
        break;
        case 1:
            me='바위';
            img1='images/ro.png';
        break;
        case 2:
            me='보';
            img1='images/pa.png';
        break;
    }

if (e == c) {
    str = "무승부!";
}else if((e == 0 && c == 2)||(e == 1 && c == 0)||(e == 2 && c == 1)){
    str = "이겼다!";
}else{
    str = "졌다..!";
}
document.getElementById("result").innerHTML = str;
document.getElementById("me").style.backgroundImage="url("+img+")";
document.getElementById("com").style.backgroundImage="url("+img1+")";
}