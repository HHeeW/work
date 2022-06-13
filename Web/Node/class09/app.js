const express = require('express');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
// const errorHandler = require('errorhandler');
//오류 핸들러 모듈
const expressErrorHandler = require('express-error-handler');

//mongodb 모듈 사용
const MongoClient = require('mongodb').MongoClient;
let database;
const connectDB = () =>{
    const databaseURL = 'mongodb://localhost:27017/local';
    MongoClient.connect(databaseURL, (err, db)=>{
        if(err){
            console.log('데이터베이스 연결에 실패했습니다.'+ err);
            return;
        }
        console.log('데이텁이스 연결 성공'+ databaseURL);
        database = db;
    });
}

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

router.route('/process/login').post((req, res)=>{
    console.log('라우팅 함수가 /process/login으로 호출 되었음');
    let userId = req.body.uerid || req.query.uerid;
    let userPass = req.body.uerpass || req.query.uerpass;
    console.log(`유저 아이디: ${userId}`)
    console.log(`유저 아이디: ${userPass}`)
    if(database){
        authUser(database, userId, userPass, (err, docs)=>{
            if(err){
                console.log(`에러발생`);
                res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                res.write("<h1>에러가 발생했습니다.</h1>")
                res.write("<p>다시 시도하세요. 계속해서 에러가 발생하면 관계자에게 문의하세요.</p>")
                res.end();
                return;
            }
            if(docs){
                console.dir(docs);
                res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 성공</h1>
                    <div>
                        <p>사용자 : ${docs[0].name}님 환영합니다.</p>
                    </div>
                    <br>
                    <a href="/login.html"> 다시 로그인 해보기</a>
                `);
                res.end();
                return;
            }else{
                console.log('로그인 실패')
                res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                res.write(`
                    <h1>사용자 로그인 실패</h1>
                    <div>
                        <p>아이디 또는 비밀번호를 확인하세요.</p>
                    </div>
                    <br>
                    <a href="/login.html"> 다시 로그인 해보기</a>
                `);
                res.end();
                return;
            }
        })
    }else{
        console.log('에러발생');
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write(`
            <h1>데이터 조회 실패</h1>
            <div>
                <p>사용자 데이터 조회가 되지 않습니다.</p>
            </div>
            <br>
            <a href="/login.html"> 다시 로그인 해보기</a>
        `);
        res.end();
        return;
    }
})

//라우터 미들웨어 등록
app.use('/', router);

let authUser = (db, id, password, callback)=>{
    console.log('authUser 호출됨');
    let users = db.collection('users');
    users.find({'id': id, 'password': password}).toArray((err, docs)=>{
        if(err){
            callback(err, null); //err, null(정상)
            return;
        }
        if(docs.length > 0){
            console.log('로그인 가능');
            callback(null, docs);
        }else{
            console.log('그런 사용자가 없음');
            callback(null, null);
        }
    });
}

//에러 메시지
const errorHandler = expressErrorHandler({
    static: {
        '404' : './public/404.html'
    }
})
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//서버 실행
http.createServer(app).listen(app.get('port'), ()=>{
    console.log('server start on port' + app.get('port'));
    connectDB();
})