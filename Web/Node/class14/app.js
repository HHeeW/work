const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static')
const mysql = require('mysql')
const database = require('./config/database')
const connection = mysql.createConnection(database);
const nunjucks = require('nunjucks');

connection.connect();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('./', static(path.join(__dirname, ' public')))
app.use('views', static(path.join(__dirname + 'views'))) //view 폴더 지정
app.set ('view engin', 'html');

//configure 첫 번째 인자로 views 폼더의 경로를 넣음, 두 번째 인자로 옵션을 넣음
//watch 가 true이면 html 파일이 변경될 때 템플릿 엔진을 다시 렌더링
//확정자는 html 또는 njk로 함.
nunjucks.configure({
    express: app,
    watch: true
});


app.set('port', process.env.PORT || 4000);


app.get('/', (req,res)=>{
    res.send('Root');
})
app.get('/loginok', (req, res)=>{
    console.log('loginok 폴더로 대기중');
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    const qry = 'Select * from members where userid =?';
    if( connection){
        connection.query(qry, [userid, userpass], (err,results)=>{
            if(err){
                res.send(err);
            }else{
                if(results.length < 1){
                    console.log(qry);
                    console.log('로그인 실패');
                }else{
                    let ulevel;
                    switch(results[0].userlevel){
                        case 1:
                            ulevel = '일반 회원';
                            break;
                        case 2:
                            ulevel = '정회원';
                            break;
                        case 99:
                            ulevel = '운영자';
                            break;
                    }
                    const context = {
                        'num': results[0].num,
                        'userid': results[0].userid,
                        'username': results[0].username,
                        'indate': results[0].indate,
                        'logindate': results[0].logindate,
                        'userlevel': ulevel
                    };
                    req.app.render('loginok', context, (err, html)=>{
                        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
                        if(err){
                            console.log('에러발생');
                            res.write('<h1>사용자 데이터 조회중 에러 발생</h1>');
                            res.end();
                        }
                        res.end(html);
                    })
                }
            }
        });
    }else{
        console.log(connection.relese())
    }
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+ '번 포트로 대기중');
})