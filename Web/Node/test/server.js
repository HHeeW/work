const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('./', static(path.join(__dirname, ' public')))


app.set('port', process.env.PORT || 5000); //5000번 포트로 설정


app.get('/', (req,res)=>{
    res.send('Root');       //5000번 포트로 접속시 "Root"를 출력
})
app.get('/api/example/', (req, res) => {        // 5000번 포트의 뒤에 /api/example/ 를 붙여서 넘어가면 밑의 name, age, job을 출력한다
    res.send([ 
        { 'id': 1, 'name': "홍길동", 'age': 25, 'job':"프로그래머" }, 
        { 'id': 2, 'name': "김철수", 'age': 22, 'job':"디자이너" }, 
        { 'id': 3, 'name': "이순이", 'age': 28, 'job':"오너" }
    ]); 
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+ '번 포트로 대기중');   //설정한 포트를 알려주는 콘솔 출력코드
})