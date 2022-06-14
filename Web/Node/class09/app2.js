const express = require('express');
const http = require('http');
const static = require('server-static');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const expressErrorHandler = require('express-error-handler');

//mongoose 모듈
const monggose = require('mongoose');
const { default: mongoose } = require('mongoose');

let database;
const connectDB = () =>{
    const databaseUrl = 'mongodb://localhost:27017/local';

    monggose.Promise = global.Promise;
    mongoose.connect(databaseUrl);

    database.on('opne', ()=>{
        console.log('데이터베이스에 연결됨' + databaseUrl)
        database = monggose.connection;
        UserSchema = mongoose.Schema({
            id: String,
            name: String,
            password: String
        });
        console.log('UserSchema 정의함');
        
    })
    database.on('disconnected',()=>{
        console.log('데이터베이스 연결 끊김')
    })
    database.ond('error', console.error.bind(console, 'mongoose 연결에러.'))
}

const app = express();
const router = express.Router();
app.set ('port', process.env.PORT || 4000);
app.use('/', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cookie
app.use(cookieParser());
//session
app.use(expressSession({
    secret: 'ezen',
    resave: true,
    saveUninitialized: true
}));

router.route('/process/login').post((req, res)=>{
    console.log('라우팅 함수가 /process/login으로 호출되었음');
    let userId = req.body.userid||req.query.userid;
    let userPass = req.body.userpass||req.query.userpass;
    console.log('요청파라미터' + userId + ', ' + userPass);

    if(database) {
        authUser(database, userId, userPass, (err, docs)=>{
            if(err) {
                console.log('에러 발생');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write("<h1>에러가 발생했습니다.</h1>");
                res.write("<p>다시 시도하세요. 계속해서 에러가 발생해도 관계자에게 문의 하지 마세요.</p>");
                res.end();
                return;
            }
            if(docs){
                console.dir(docs);
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                   <h1>사용자 로그인 성공</h1>
                   <div>
                      <p>사용자 : ${docs[0].name} 님 환영하지라~</p>
                   </div>
                   <br>
                   <a href="/login.html">다시 로그인 해보기</a>
                `);
                res.end();
                return;
            }else{
                console.log('로그인 실패');
                res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
                res.write(`
                   <h1>사용자 로그인 실패</h1>
                   <div>
                      <p>아이디, 또는 패스워드가 달라요.</p>
                   </div>
                   <br>
                   <a href="/login.html">다시 로그인 해보기</a>
                `);
                res.end();
                return;            
            }
        })
    }else{
        console.log('에러 발생');
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.write(`
           <h1>데이터 조회 실패</h1>
           <div>
              <p>사용자 데이터 조회가 되지 않습니다.</p>
           </div>
           <br>
           <a href="/login.html">다시 로그인 해보기</a>
        `);
        res.end();
        return;            
    }
});

router.route('/process/adduser').post((req, res)=>{
    console.log('라우팅 함수가 /process/adduser 로 호출되었음');
    let userid = req.body.userid;
    let userpass = req.body.userpass;
    let username = req.body.username;
    console.log(`요청파라미터: ${username}, ${userid}, ${userpass}`);
    if(database) {
       addUser(database, userid, userpass, username, (err, result)=>{
           if(err){
              console.log('에러 발생');
              res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
              res.write("<h1>에러가 발생했습니다.</h1>");
              res.write("<p>다시 시도하세요. 계속해서 에러가 발생해도 관계자에게 문의 하지 마세요.</p>");
              res.end();
            return;
           }
           if(result){
              console.log(result);
              console.log('에러 발생');
              res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
              res.write(`
                 <h1>사용자 추가 성공</h1>
                 <div>
                    <p> 사용자 : ${username}님을 새로운 회원으로 추가했습니다.</p>
                 </div>
                 <a href="/join.html">사용자 계속 추가하기</a>
              `);
              res.end();            
           }
       })
    }else{
        console.log('에러 발생');
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.write(`
           <h1>데이터 등록 실패</h1>
           <div>
              <p>데이터 등록이 되지 않습니다.</p>
           </div>
           <br>
           <a href="/join.html">다시 시도 해보기</a>
        `);
        res.end();
        return;              
    }
});

//라우터 미들웨어 등록
app.use('/', router);

const authUser = (db, id, password, callback) => {
    console.log('authUser 호출됨' + id +' , ' + password);
    UserModel.find({"id": id, "password": password},(err, docs)=>{
        if(err){
            callback(err, null);
            return
        }
        if(docs.length > 0){
            console.log('일치하는 사용자를 찾음');
            callback(null, docs);
        }else{
            console.log('일치하는 사용자를 찾지 못함.');
            callback(null, null);
        }
 })
    let users= db.collection('users');
    users.find({"id": id, "password": password}).toArray((err, docs)=>{
        if(err) {
            callback(err, null);  //err , null(정상)
            return;
        }
        if(docs.length > 0) {
            console.log('로그인이 가능하다규~~');
            callback(null, docs);
        }else{
            console.log('그런 사용자가 없음');
            callback(null, null);
        }
    });
}

const addUser = (db, id, password, name, callback )=>{
     console.log(`addUser 호출됨 : ${id}, ${password}, ${name}`);
     new UserModel.find({"id": id, "password": password},(err, docs)=>{
            if(err){
                callback(err, null);
                return
            }
            console.log('사용자 데이터 추가함')
            callback(null, users);
     })
     let users =db.collection('users');
     users.insertMany([{
        "id": id,
        "name": name,
        "password": password,
     }], (err, result) => {
        if(err) { callback(err, null); return; }
        if(result.insertedCount > 0) {
            console.log('사용자 추가됨 : ' + result.insertedCount);
            callback(null, result);
        }else{
            console.log('추가된 레코드가 없음');
            callback(null, null);
        } 
     })
}

//에러메시지
const errorHandlers = expressErrorHandler({
    static: {
        '404' : './public/404.html'
    }
})
app.use( expressErrorHandler.httpError(404));
app.use( errorHandlers );
//서버실행
http.createServer(app).listen(app.get('port'), ()=>{
    console.log('server start on port' + app.get('port'));
    connectDB();
});