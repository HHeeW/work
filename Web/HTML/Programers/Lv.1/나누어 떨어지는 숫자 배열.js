let arr = [3,2,4,6,9,8,1,]	;
let a = 3;

function solution(arr, divisor) {
    let a = arr.filter(x=> x%divisor===0).sort((a, b)=> a - b);
    return (a.length === 0) ? [-1] : a}
console.log(solution(arr, a));