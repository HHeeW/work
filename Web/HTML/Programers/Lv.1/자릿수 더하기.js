function solution(n)
{
    var answer = 0;
    for(i of String(n).split(''))answer += parseInt(i);
    return answer;
}
let a = 12345
console.log(solution(a))