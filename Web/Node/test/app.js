const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static')
const mysql = require('mysql')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('./', static(path.join(__dirname, ' public')))


app.set('port', process.env.PORT || 5000);


app.get('/', (req,res)=>{
    res.send('Root');
})
app.get('/api/example/', (req, res) => {
    res.send([ 
        { 'id': 1, 'name': "홍길동", 'age': 25, 'job':"프로그래머" }, 
        { 'id': 2, 'name': "김철수", 'age': 22, 'job':"디자이너" }, 
        { 'id': 3, 'name': "이순이", 'age': 28, 'job':"오너" }
    ]); 
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+ '번 포트로 대기중');
})