const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static')
const mysql = require('mysql')
const database = require('./config/database')
const connection = mysql.createConnection(database);

connection.connect();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('./', static(path.join(__dirname, ' public')))


app.set('port', process.env.PORT || 4000);
app.get('/', (req,res)=>{
    res.send('Root');
})
app.get('/loginok', (req, res)=>{
    console.log('loginok 폴더로 대기중');
    const userid = req.body.userid;
    const userpass = req.body.userpass;
    connection.query('Select * from members where userid =?')
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+ '번 포트로 대기중');
})