
const array1 = [1,1,3,3,0,1,1];

function solution(array1)
{
    return  array1.filter((num, ind, ) => num != array1[ind+1]);
}
console.log(solution(array1))



