const express = require('express')
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 4000);

//미들웨어
app.use((req, res, next) =>{
    console.log('첫 번째 미들웨어 호출')
    res.user
})

const server = http.createServer(app).listen(app.get('port'),function(){
    console.log(`익스프레스 웹 서버가 ${app.get('port')}번 포트로 실행되었습니다.`)
})