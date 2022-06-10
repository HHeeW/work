const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

//포트설정
app.set('port', process.env.PORT||5000);

//기본폴더
app.use('/www', static(path.join(__dirname, 'public')));

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cookie 
app.use(cookieParser());
//session
app.use(expressSession({
    secret: 'work',
    resave: true,
    saveUninitialized: true
}));

//router
const router = express.Router();

router.route('/process/login/:name').post((req,res)=>{
    console.log('process/login 호출');
    let userid = req.body.userid || req.query.userid;
    let userpass = req.body.userpass || req.query.userpass;
    let username = req.params.name;
    if(req.session.user) {
        console.log('이미 로그인 되어 있습니다.');
        res.redirect('/www/product.html');
    }else{
        req.session.user = {
            id: userid,
            name: username,
            level: 100
        };
        res.writeHead(200, {"Content-type": "text/html;charset=utf8"});
        res.write(`
            <h1>로그인 성공</h1>
            <p>ID: ${userid}</p>
            <p><a href="/product">상품 페이지로 이동</a></p>
        `);
        res.end();
    }
});

//
router.route('/product').get((req, res)=>{
    console.log('product 호출됨');
    if(req.session.user) {
         res.redirect('/www/product.html');
    }else{
        res.redirect('/www/login.html');
    };
})

//로그아웃
router.route('/logout').get((req,res)=>{
    if(req.session.user) {
        console.log('로그아웃 합니다.');
        req.session.destroy((err)=>{
            if(err) {
                console.log('세션 삭제 시 에러가 발생했습니다.');
                return;
            }
            console.log('세션 삭제 성공');
            res.redirect('/product');
        })
    }
});

//쿠키저장
router.route('/setUserCookie').get((req, res)=>{
    res.cookie('user', {
        id:"hong",
        name:"홍길동",
        power: 10000
    });
    res.redirect('/showCookie');
});

//쿠키확인
router.route('/showCookie').get((req, res)=>{
    res.send(req.cookies);
});

//라우터 미들웨어 등록
app.use('/', router);

//서버실행
http.createServer(app).listen(app.get('port'), ()=>{
    console.log('server start on port' + app.get('port'));
});