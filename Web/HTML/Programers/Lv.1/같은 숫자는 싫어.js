
const array1 = [1,1,3,3,0,1,1];

function solution(array1)
{
    return  array1.filter((num, ind, ) => num != array1[ind+1]);
    // var answer = [];
    // for(let i=0;i <array1.length;i++){
    //     if(array1[i] != array1[i-1]){
    //         answer.push(array1[i])
    //     }
    // }
    // return answer;
}
console.log(solution(array1))



