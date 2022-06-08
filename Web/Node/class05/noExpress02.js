const express = require('express');
const http = require('http');
const app = express();
app.use((req, res, next)=>{
    console.log('첫 번째 미들웨어에서 요청을 처리합니다.');
    // req.redirect('http://naver.com');
    let userAg = req.header('User-Agent');
    let paramName = req.query.name || '손님'; ///?name=민수
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버 음답 결과</h1>');
    res.write(`<div><p>User-Agent : ${userAg}</p></div>`);
    res.write(`<div><p>접속자는${paramName}입니다. </p></div>`);
    res.end()
});

http.createServer(app).listen(4000, ()=>{
    console.log('4000포트에서 express 서버 시작')
})