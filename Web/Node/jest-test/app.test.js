
const {addNumber} = require('./addNumber');
test("두 수를 더해주는 함수 addNumber", ()=>{
    const a = 3;
    const b = 7;
    const result = 10;
    //실행
    const actResult = addNumber(a, b);
    expect(actResult).toBe(result);
})