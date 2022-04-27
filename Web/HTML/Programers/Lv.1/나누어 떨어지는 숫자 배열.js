let arr = [3,2,6]	;
let a = 10;

function solution(arr, divisor) {
    let a = arr.filter(x=> x%divisor===0).sort((a, b)=> a - b);
    return (a.length === 0) ? [-1] : a}
console.log(solution(arr, a));