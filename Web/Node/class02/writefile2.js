const fs = require('fs');

fs.open('./hello.txt', 'w', (err, fd)=>{
    if(err) throw err;
    let buf = new Buffer('두 번째 안녕. \n');
    console.log(buf);
    fs.write(fd, buf, 0, buf.length, null, function(err, wrtten, buffer){
        if(err) throw err;
        console.log(err, wrtten,buffer);

        fs.close(fd, function(){
            console.log('파일 열고 데이터를 쓴 후 닫기를 완료함.')
        })
    })
})