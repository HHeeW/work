const num = [12, 43, 32, 65, 44, 13, 62, 21];

function solution(arr) {
    if(arr.length === 1) return [-1];
    else arr.sort((a, b) => b - a).pop();
    return arr;
}
console.log(solution(num))