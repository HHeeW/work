const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];



function solution(participant, completion) {
    var answer = '';
    participant.map((number, index, source)=> {
        console.log(number);
        console.log(index);
        // console.log(source);
    })


    // for(let i of participant){
    //     for(let j of participant)
    //     console.log(i)
    //     console.log(completion.includes(i))
    // }
    return answer;
}
console.log(solution(participant, completion))