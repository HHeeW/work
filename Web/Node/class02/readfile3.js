const fs = require('fs');

fs.open('./hello.txt', 'r', function(err, fd){
    if(err) throw err;
    let buf = new Buffer.alloc(20); //size가 10인 buffer를 만든다.
    console.log('버퍼타입: %s', Buffer.isBuffer(buf));
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;
        let inStr = buffer.toString('utf8', 0, bytesRead); // bytecode로 들어온 버퍼 내용을 
        console.log('파일에 읽은 데이터 : %s', inStr);
        console.log(err, bytesRead, buffer);
        fs.close(fd, function(){
            console.log('hello.txt 파일을 열고 읽은 후 닫기 완료')
        });
    })
})