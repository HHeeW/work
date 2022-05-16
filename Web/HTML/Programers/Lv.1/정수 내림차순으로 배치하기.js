const a = 118372

function solution(n) {
    // var answer = 0;
    // answer = String(n).split('');
    // answer.sort((a, b) => b - a);
    // return parseInt(answer.join(''));
    return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
}
console.log(solution(a))