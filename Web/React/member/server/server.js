const express = require('express');
const app = express();

const userInform = require('./uer_inform');
app.use('./user_inform', userInform)
const port = 4000;
app.listen(port, ()=> console.log(`서버가 NodeJS를 통해 ${port}번 포트로 실행되었습니다.`))



