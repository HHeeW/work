let a = [1,2,3,4]


function solution(arr) {
    var answer = 0;
    let b=0;
    for(i of arr)b += i;
    answer = (b/arr.length);
    return answer;
}
console.log(solution(a));