const calc = require('./calc');
console.log('모듈 분리한 후에 calc.add 함수 호출결과는 %d 이다.', calc.add(12, 34));

//모듈을 이용하여 + - * / 함수를 만든 후 ch06.test 에서 require 하여 각 수식을 
//계산해 보자.  