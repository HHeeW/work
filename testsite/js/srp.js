

let total = 0;
let win = 0;
let lose = 0;
let sumWin, sumLose;
function srp(e){
    let str, img, img1;
    let me = ['가위', '바위', '보'];
    let c = Math.floor(Math.random()*3);
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
        win++;
    }else{
        str = "졌다..!";
        lose++;
    }
    total++;
    sumWin = win / total*100;
    sumLose = lose / total*100;
    document.getElementById("result").innerHTML = str;
    document.getElementById("me").style.backgroundImage="url("+img+")";
    document.getElementById("com").style.backgroundImage="url("+img1+")";
    document.getElementById("total-Num").innerHTML = total + "회";
    document.getElementById("win-Num").innerHTML = win + "회";
    document.getElementById("lose-Num").innerHTML = lose + "회";
    document.getElementById("totalWin").innerHTML = "승률 :"+sumWin.toFixed(2) + "%";
    document.getElementById("totallose").innerHTML = "패률 :"+sumLose.toFixed(2) + "%";

    let video = document.getElementById("backVideo");
    if(win == 50){
        video.removeAttribute("src");
        video.setAttribute('src', './video/fireworks.mp4');
        video.load;
        video.play;

        let h1 = document.getElementsByClassName("toph1");
        h1[0].innerHTML = "게임을 이겼습니다~!!";
        h1[0].classList.add("animate__flip");
        h1[1].classList.add("animate__shakeY");
        for(i = 0;i < h1.length; i++){
            h1[i].load;
        }
    }
}


function lunch(){
    let menu = ["짜장면", "돈까스", "된장국", "김치찌개", "회덮밥", "라면", "햄버거","볶음밥", "국수", "국밥"];
    let menuNum = Math.floor(Math.random()*menu.length);
    document.getElementById("lunch").innerHTML = menu[menuNum]+" 먹자!";
}
function lotto(){
    let lotto =[];
    for(i = 1; i <= 7; i++){
        lotto.push(Math.floor(Math.random()*45 + 1) + "\u00a0");
    }
    document.getElementById("lotto").innerHTML = lotto;
}