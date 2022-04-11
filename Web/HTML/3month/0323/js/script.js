function mydoc(num){
    document.getElementById("mycar").innerHTML = num;
}

function fFunc(){
    mydoc("안녕하세요?")
}

function sFunc(){
    mydoc("안녕히 계세요.")
}

fFunc();
sFunc();

//변수 두 개를 받아서 합을 출력하는 함수를 만들어 화면에 출력하세요.
//두 개의 함수를 호출시키는 방법
function claculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let  rs = claculator(5, 7);

mydoc(rs);
//-----------------------------------------
function claculator(num1, num2){
    let sum = num1 + num2;
    mydoc(sum);
}
claculator(5,8);
//-----------------------------------------