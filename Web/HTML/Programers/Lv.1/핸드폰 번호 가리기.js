const num = "01033334444";

function solution(phone_number) {
    var answer =""
    for(let i=0;i < phone_number.length-4; i++) {answer += '*'}
    // answer = Array.from({length:phone_number.length-4}, ()=>'*').join('');
    return answer += phone_number.substr(-4 ,);
}
console.log(solution(num))