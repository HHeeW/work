'use strick';

let total = 0;
let win = 0;
let lose = 0;
let sumWin, sumLose;
function srp(e){
    let str, img, img1;
    let me = ['가위', '바위', '보'];
    let c = Math.floor(Math.random()*3);
    
    rsp(e, c);

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
    document.getElementById("total-Num").innerHTML = total + "회";
    document.getElementById("win-Num").innerHTML = win + "회";
    document.getElementById("lose-Num").innerHTML = lose + "회";
    document.getElementById("totalWin").innerHTML = "승률 :"+sumWin.toFixed(2) + "%";
    document.getElementById("totallose").innerHTML = "패률 :"+sumLose.toFixed(2) + "%";

   
    let h1 = document.getElementsByClassName("toph1");
    if(win == 50){
        h1[0].innerHTML = "게임을 이겼습니다~!!";
        h1[0].style.color= "white";
        h1[0].classList.add("animate__flip");
        for(i = 0;i < h1.length; i++){
            h1[i].load;
        }
    }
}
