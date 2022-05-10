const a = "try hello world"

function solution(s) {
    var answer = '';
    const b=s.split(" ")
    
    for(let i=0;i<s.split(" ").length;i++){
        for(let j=0; j < b[i].split('').length; j++){
            (j % 2 != 1) ? answer += b[i].split('')[j].toUpperCase() 
            :              answer += b[i].split('')[j].toLowerCase();
        }
        answer += " ";
    }
    return answer.substring(answer.length-1 , -1);
}
console.log(solution(a));