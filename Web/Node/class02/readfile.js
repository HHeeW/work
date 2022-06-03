const fs = require('fs');
// readFileSync => 동기식으로 파일을 읽음
let mypackage = fs.readFileSync('./package.json', 'utf-8');
console.log(mypackage);
console.log('package.json 파일을 읽었습니다.');