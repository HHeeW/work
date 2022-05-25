let s = "2three45sixseven"

function solution(s) {
    var answer = '';
    let num = '';
    const name = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i of s){
        if(isNaN(i)){
            num += i;
            for(let j in name){
                if(num === name[j]){
                    answer += j
                    num = ''
                }
            }
        }else{
            answer += i;
            for(let j in name){
                if(num === name[j]){
                    answer += j
                }
            }
            num = ''
        }
    }
    return Number(answer);
}

console.log(solution(s))