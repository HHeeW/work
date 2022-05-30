const price = 3;
const money = 40;
const count = 4;


function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i ++)answer += price * i;
    return answer> money ? answer -= money : 0;
}
console.log(solution(price, money, count));