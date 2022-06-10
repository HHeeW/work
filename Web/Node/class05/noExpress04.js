const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const expressErrorHandler = require('express-error-handler');

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended : false }));

//body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

router.route('/member/loginok/:gname').post((req, res)=>{
   console.log('로그인 처리');
   let groupMember = req.params.gname;
   let userName = req.body.userid;
   let userPass = req.body.userpass;
  
   res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express서버 응답결과</h1>');
    res.write('<div><img src="../../images/exmachine.png" width=200 alt="머신" /></div>')
    res.write(`<div><p>접속자의 아이디는 ${userName} 이며 비밀번호는 ${userPass}입니다.</p></div>`);
    res.write(`접속자는 ${groupMember}에 속해 있습니다.`);
    res.end();
});

const errorHandler=expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});
app.use( expressErrorHandler.httpError(404));
app.use(errorHandler);

app.use('/', router);

// app.use((req, res)=>{
//     console.log('첫 번째 미들웨어에서 요청을 처리합니다.');
//     let userAg = req.header('User-Agent');
//     let userName = req.body.userid;
//     let userPass = req.body.userpass;
//     res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
//     res.write('<h1>Express서버 응답결과</h1>');
//     res.write('<div><img src="images/exmachine.png" width=200 alt="머신" /></div>')
//     res.write(`<div><p>User-Agent : ${userAg} </p></div>`);
//     res.write(`<div><p>접속자의 아이디는 ${userName} 이며 비밀번호는 ${userPass}입니다.</p></div>`);

//     res.end();
// });


http.createServer(app).listen(4000, ()=>{
    console.log('4000포트에서 express 서버 시작');
})