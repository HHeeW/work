//타임객체

let result = 0;

console.time('duration_sum');

for(let i = 0; i < 1000000000; i++){
    result += i;
}
console.timeEnd('duration_sum');

console.log('1부터 1,000,000,000까지 더한 결과물: %d', result)