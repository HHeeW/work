const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

let corsOptions = {
    origin: "http://localhost:4000"
}
app.use(cors(corsOptions));

const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const data = fs.readFileSync('./database/db.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/myrest', (req,res)=>{
  let sql = `SELECT * FROM restaurant_ggy order by id desc LIMIT 0, 20;`;
  connection.query(
    sql, (err, rows, fields)=>{
      res.send(rows);
    }
  )
})

app.listen(port, ()=> console.log( `Listening on port ${port}`));