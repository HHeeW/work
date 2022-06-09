const express = require('express');
const http = require('http');
const static = require('static');
const path = require('path')
const { nextTick } = require('process');
const { Router } = require('express');
const app = express();
//request(요청) response(응답)
app.set('port', process.env.PORT || 4000);
app.use(static(path))

app.use((req,res, next)=>{
    console.log('첫 번쨰 미들웨어에서 요청을 처리합니다.');
    console.log(static(path.join(__dirname, 'public')))
    Router.route('/porcess/login').get((req, res)=>{
        let userId = req.query.id;
        let userName = req.query.name;
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
        res.write(`<h1>첫 번째 미들웨어가 보내준 정보 </h1>`);
        res.end(`<p>이름: ${userName} 아이디: ${userId}`);
    });
    app.use('/').path();

    // req.user={
    //     name : '홍길동',
    //     age : 40,
    //     address: '김포시',
    //     char: '포악함'
    // }
    // next();
});

// app.use((req, res)=>{
//     console.log('두 번째 미들웨어에서 요청을 처리합니다.');
//     res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
//     res.write(`<h1>첫 번째 미들웨어가 보내준 정보 </h1>`);
//     res.end(`<p>이름: ${req.user.name} 나이: ${req.user.age} 사는 곳: ${req.user.address} 성격: ${req.user.char} `);
// })

http.createServer(app).listen(4000, ()=>{
    console.log(`express를 이용하여 4000번 포트에서 서버가 실행되었습니다`)
})