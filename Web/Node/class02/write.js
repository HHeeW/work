const fs = require('fs');

//sample 디렉토리가 있는지 체크
const isDir = fs.existsSync('./sample');
if(isDir === false){
    fs.mkdirSync('./sample');
}
const isFile = fs.existsSync('./sample/sample.txt');