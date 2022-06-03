const fs = require('fs');

fs.writeFile('./hello.txt', '안녕? 반가워요.', (err)=>{
    if(err){
        console.log('Error: ' + err);
    }
    console.log('hello.txt 파일에 내용을 썼습니다.')
})