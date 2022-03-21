let arr = [1, 1, 3, 3, 0, 1, 1];
//indexOf(), fillter(), includes(), forEach()

//foreach() - 배열을 순회하면서 배열의 원들로 주어진 callback 함수를 실행한다.
//ex) 0부터 10까지 중에서 3의 배수만 출력하라.
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = [];
arr.forEach((element) => {
    if(element % 3 == 0){
        result.push(element);
    }
});

//includes() - 배열에 특정 값이 포함되는지 여부를 검사한다.

let rs = [];
arr.forEach((element) => {
    if(!rs.indludes(element)){
        rs.push(element);
    }
    console.log(rs);
})