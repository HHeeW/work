const express=require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const pageRouter = require('./routes/page')

const app = express();
app.set('port', process.env.PORT||4000);  //port 셋팅
app.set('view engine', 'html');  //템플릿 엔진
nunjucks.configure('views', {    //템플릿 엔진 기본값
    express: app,
    watch: true
});
app.use(express.static(path.join(__dirname, 'public')));  //static 폴더 설정
app.use(express.json());   // post 로 들어오는 값을 body로 보냄
app.use(express.urlencoded({extended:false}));  //post로 들어오는 값을 body로 보냄
app.use(cookieParser(process.env.COOKIE_SECRET));  //쿠키 시크릿은 .env 값을 이용
//session 설정
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false
    }
}));

//app.use('/', pageRouter);
//에러설정  400, 500
app.use((req, res, next)=>{
   const error = new Error(`${req.method} ${req.url} 페이지를 찾을 수 없습니다.`);
   error.status = 404;
   next(error); 
});
app.use((req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중...');
})
