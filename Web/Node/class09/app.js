const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const errorHandler = require('errorhandler');
//오류 핸들러 모듈
const expressErrorHandler = require('express-error-handler');

const app = express();
//router 등록
const router = express.Router()

//포트 설정
app.set('port', process.env.PORT||4000);

//기본폴더
app.use('/', static(path.join(__dirname, 'public')));

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cookie
app.use(cookieParser());

//session
app.use(expressSession({
    secret: 'HeeWon',
    resave: true,
    saveUninitialized: true
}));

//라우터 미들웨어 등록
app.use('/', router);

//서버 실행
http.createServer(app).listen(app.get('port'), ()=>{
    console.log('server start on port' + app.get('port'));
})