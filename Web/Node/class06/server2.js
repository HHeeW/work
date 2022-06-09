const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');  //1.
const router = express.Router(); //라우터 셋팅

//request(요청), response(응답)
app.set('port', process.env.PORT || 4000);
app.use(static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended : false }));  //2.
app.use(bodyParser.json()); //3. 

router.route('/process/login/:level').post((req, res)=>{
    let userId = req.body.id||req.query.id;
    let userName = req.body.name||req.query.name;
    let level = req.params.level;
    res.writeHead('200', { 'Content-Type' : 'text/html;charset=utf8'});
    res.write(`<h1>첫 번째 미들웨어가 보내준 정보</h1>`);
    res.end(`<p>아이디 : ${userId}, 이름 : ${userName}, 권한 : ${level}
     <br/><img src="exmachine.png" alt="png" />`);
});
app.use('/', router);

// app.use((req, res, next)=>{
//      console.log('첫 번째 미들웨어에서 요청을 처리합니다.');

//      req.user = {
//        name : '홍길동',
//        age : 40,
//        address: '김포시',
//        char: '포악함'
//      }
//      next();
// });

// app.use((req, res)=>{
//     console.log('두 번째 미들웨어에서 요청을 처리합니다.');
//     res.writeHead('200', { 'Content-Type' : 'text/html;charset=utf8'});
//     res.write(`<h1>첫 번째 미들웨어가 보내준 정보</h1>`);
//     res.end(`<p>이름 : ${req.user.name}, 나이 : ${req.user.age}, 
//      사는곳 : ${req.user.address}, 성격 : ${req.user.char}
//      <br/><img src="exmachine.png" alt="png" />`);
// })

http.createServer(app).listen(app.get('port'), ()=>{
    console.log('express를 이용하여 '+app.get('port')+'번 포트에서 서버가 실행되었습니다.');
});