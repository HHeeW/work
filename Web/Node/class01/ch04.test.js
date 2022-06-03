//노드JS에서 제공하는 대표적인 전역변수 2개
//!. __filename, __dirname

console.log("현재 실행한 파일 이름은 %s 입니다.", __filename);
console.log("현재 실행한 파일 경로는 %s 입니다.", __dirname);

let person = {name: "홍길동", age:"647"};
console.dir(person)