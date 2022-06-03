let calc = {};
calc.add = (a,b)=>{
    return a + b;
}

console.log('모듈 분리 전 calc.add 함수 호출 결과는 %d 이다', calc.add(12,43))