const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql')
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./db/db.json')
const conf = JSON.parse(data);
const con = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
con.connect();

app.get('/app', (req, res) =>{
    let offset = 0;
    let limits = 30;
    let dbquery = `SELECT * FROM restaurant_ggy order by id desc LIMIT ${offset}, ${limits}`;
    con.query(dbquery, (err, rows, fields)=>{
        if(err){console.log('db접속중에 에러가 발생했습니다.' + err)}
        res.send(rows);
    })
})

app.listen(port, () => console.log(`Listening on Port ${port}`));