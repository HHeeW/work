const a = [4, 7, 12];
const b = [true,false,true];

function solution(absolutes, signs) {
    var answer = 0;
    for(i in absolutes)signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    return answer;
}

console.log(solution(a,b))