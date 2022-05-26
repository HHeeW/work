const a = [1, 5, 2, 6, 3, 7, 4];
const b = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];


function solution(a, b) {
    var answer = [];
    var cc=[]
    for(let i=0; i < b.length; i++){
        cc = a.slice(b[i][0] - 1, b[i][1]).sort((a, b) => a - b);
        answer.push(cc[b[i][2]-1]);

    }
    return answer;
}
console.log(solution(a, b))