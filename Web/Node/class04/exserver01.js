const express = require('express');
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 4000);
const server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('익스프레스로 웹 서버를 실행하였음.' + app.get('port'));
})