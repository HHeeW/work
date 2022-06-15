//미들웨어 -> 요청, 응답의 중간 위치해서 요청 또는 응답을 제어하는 소프트웨어
// 예) app.use(미들웨어)

const express = require('express');
const path = require('path')

const app = express();
app.set('port', process.env.PORT || 4000);

app.unsubscribe((req, res, next)=>{
    console.log('모든 요청에 실행됨');
    next();
})

app.get('/', (req, res, next)=>{
    console.log('GET/ 요청에만 실행됨');
    next();
}, (req, res)=>{
    throw new Error('에러는 에러처리 미들워어로 보냄')
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+'번 포트로 대기중입니다.')
})