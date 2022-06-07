const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];



function solution(participant, completion) {
    completion.map((number, index)=> {
        console.log(number)
        for(let i = 0; i < participant.length; i++){
            if(participant[i] === number){
                console.log(participant[i])
                participant[i] = ''
                break;
            }
        }
    })
    return participant.filter((e)=> e !== '').toString();
}
console.log(solution(participant, completion))