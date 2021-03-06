const express = require('express');
const path = require('path');
const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT||4000);

sequelize.sync({ force : false })
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없음`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status||500);
    res.render('error');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '번 포트에서 대기 중');
});