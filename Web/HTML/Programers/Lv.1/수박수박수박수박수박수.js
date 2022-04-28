function solution(n) {
    var answer = '';
    for(i=1;i<=n;i++) (i % 2 == 0)? answer += "박" : answer += "수";
    return answer;
}
console.log(solution(6));



