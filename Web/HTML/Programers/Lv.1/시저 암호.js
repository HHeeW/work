const s = "a B z";
const n = 4;


function solution(s, n) {
    var answer = []
    for(let j of s.split('')){
        for(let i = 65; i <= 90; i ++){
            if(String.fromCharCode(i) === j){
                if(i+n > 91)answer.push(String.fromCharCode(i + n - 26))
                else answer.push(String.fromCharCode(i + n))
            }
        }
        for(let i = 97; i <= 122; i ++){
            if(String.fromCharCode(i) === j){
                if(i+n > 123)answer.push(String.fromCharCode(i + n - 25))
                else answer.push(String.fromCharCode(i + n))
            }
        }
    }
    return answer;
}

console.log(solution(s,n));