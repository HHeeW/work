const express = require('express');
const http = require('http');
const app = express();

http.createServer(app).listen(4000, ()=>{
    console.log('express를 이용하여 4000번 포트에서 서버가 실행되었습니다')
})