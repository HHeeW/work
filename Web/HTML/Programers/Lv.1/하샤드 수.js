const num = 10;
function solution(x) {
    let sum= 0;
    const a = String(x).split("")
    for(let i in a){
        sum += Number(a[i]);
    }
    return x % sum  == 0 ? true : false;
}

console.log(solution(num))