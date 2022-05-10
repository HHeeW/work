const a = 12345;

function solution(n) {
    const c = []
    const b = String(n).split('').reverse();
    for(let i of b)c.push(parseInt(i));
    return (c)
}

console.log(solution(a));