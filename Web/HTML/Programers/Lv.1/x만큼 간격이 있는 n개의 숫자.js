const a = 2;
const b = 5;


function solution(x, n) {
    var answer = [];
    let c= x;
    for(let i = 0; i < n; i ++){
        answer.push(c);
        c +=x;
    }
    return answer;
}
console.log(solution(a,b))