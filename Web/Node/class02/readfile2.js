const fs = require('fs');

fs.readFile('./package.json', 'utf-8', function(err, data){
    if(err){
        console.log('파일을 읽을 수 없습니다.');
    }
    console.log(data);
})