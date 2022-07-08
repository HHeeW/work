test('2 더하기 2는 4가 됩니다.', ()=>{
    expect(2 + 2).toBe(4);
})

test('object assignment', ()=>{
    const data = {one : 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
})

//함수 제작
import { addNumber } from "./addNumbert";
test("두 수를 더해주는 함수 addNumber", ()=>{
    const a = 3;
    const b = 7;
    const result = 10;
    //실행
    const actResult = addNumber(a + b)
})