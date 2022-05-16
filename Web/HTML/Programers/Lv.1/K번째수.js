const a = [1, 5, 2, 6, 3, 7, 4];
const b = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];


function solution(array, commands) {
    var answer = [];
    var cc=[]
    for(let i=0; i < commands.length; i++){
        cc = array.slice(commands[i][0], commands[i][1]);
        console.log(i);
    }
    return answer;
}
console.log(solution(a, b))