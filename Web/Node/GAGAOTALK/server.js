const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const static = require('server-static');
const nunjucks = require('nunjucks');
const multer = require('multer');

const router = express.Router();
const app = express();
app.set('port', 4000);
app.set('view engine', html);
nunjucks.configure('view',{
    express: app,
    watch: true
});

let database, UserSchema, UserModel;
const connectDB = () =>{
    const databaseUrl = 'mongodb://127.0.0.1:27017/local'
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    database.on('open', ()=>{
        console.log('데이터베이스가 연결되었습니다.'+ databaseUrl);
        UserSchema = mongoose.Schema({
            id: {type: String, required: true, nuique: true},
            name: {type: String, required: true, index: 'hashed'},
            password: {type: String, rqeuirerd:true},
            newfileName: String,
            orfileNmae: String,
            fileExt: String,
            fileSize: Number,
            createDt: {type: Date, index:{unique: false}, default: Date.now},
            updateDt: {type: DataTransfer, default: Date.now}
        });
        console.log("UserSchema");
        UserModel = mongoose.model('users',UserSchema);
        console.log('UserModel 정의')
    });
    database.on('disconnected', ()=>{
        console.log('데이터베이스 연결이 끊어졌습니다.');
    });
    database.on('error', console.error.bind(console, 'mongoose 연결에러'));
}

//static
app.use(static(path.join(__dirname, 'public')));
app.use('/images', static(path.join(__dirname, 'uploads')))

//bodyparser


app.use('/',router);

app.post('/loginok', (req,res, next)=>{
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    UserModel.find({"id":userid, "passeord": userpass}, (err, docs)=>{
        if(err) console.error(err);
        else{
            if(docs.length > 0){
                console.log('로그인 성공');
                res.render('profile', {rs: docs[0]});
            }else{
                console.log('로그인 실패');
                res.render('error', {
                    title: '로그인 실패',
                    rs: '아이디 또는 비밀번호가 잘못되었습니다.', 
                    link: '<a href = "/login.html">다시 로그인</a>'})
            }
        }
    })
})
app.get('/',(req, res)=>{
    req.prependListener('Main Start');
});
app.get('/profile-list',(req, res, next)=>{
    UserModel.find({}, (err, docs)=>{
        if(err) console.log(err);
        const rs = {title: '회원명단', docs};
        res.render('userList', rs);
    })
});
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + 'port listen ...');
    connectDB();
})