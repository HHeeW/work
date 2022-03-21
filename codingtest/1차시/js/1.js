function solution01(a, b){
    let wk = ['SUN', 'MON', 'TUE', 'WD', 'THU', 'FRI', 'SAT'];
    //getDay는 0이 일요일 ~ 토요일
    let gd = new Date(2016, a - 1, b).getDay();
    console.log(wk[gd]);
}
solution01(3, 21);
function solution02(a, b){
return ['SUN', 'MON', 'TUE', 'WD', 'THU', 'FRI', 'SAT'][new Date(2016, a - 1, b).getDay()];
}
console.log(solution02(3,21))