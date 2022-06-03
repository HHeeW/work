const fs = require('fs');

let inFile = fs.createReadStream('./red.txt', {flags: 'r'});
let outFile = fs.createWriteStream('./rwd.txt', {flags: 'w'});

inFile.on('data', function(data){
    console.log('읽어 들인 데이터', data);
    outFile.write(data);
});

inFile.on('end', function(){
    console.log('파일읽기 종료')
    outFile.end(function(){
        console.log('파일 쓰기 종료')
    });
});