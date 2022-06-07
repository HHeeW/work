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

// app.get('/api/myrest', (req, res)=> {
//     res.send([
//         { 
//           "id": 1, 
//           "sigun" : "가평군",
//           "title":"가평축협 한우명가", 
//           "tel":"031-1234-1234", 
//           "title_food":"푸른연잎한우명품꽃등심", 
//           "zip": "01245", 
//           "address": "도로명 주소랍니다.", 
//           "address_old": "지번주소랍니다.", 
//           "latitude": 37.8158443, 
//           "longitude": 127.5161283,
//           "radius": 100
//         },
//         { 
//           "id": 2, 
//           "sigun" : "고양시",
//           "title":"청정바지락칼룩수", 
//           "tel":"031-1234-1234", 
//           "title_food":"천년초들깨수제비", 
//           "zip": "01245", 
//           "address": "도로명 주소랍니다.", 
//           "address_old": "지번주소랍니다.", 
//           "latitude": "37.6737073", 
//           "longitude": "126.7753751",
//           "radius": "50"
//         },
//         { 
//           "id": 3, 
//           "sigun" : "광주시",
//           "title":"수와연", 
//           "tel":"031-1234-1234", 
//           "title_food":"산야초마늘밥", 
//           "zip": "01245", 
//           "address": "도로명 주소랍니다.", 
//           "address_old": "지번주소랍니다.", 
//           "latitude": "37.4987118", 
//           "longitude": "127.3024465",
//           "radius": "60"
//         },
//         { 
//           "id":4, 
//           "sigun" : "남양주시",
//           "title":"(주)광릉불고기", 
//           "tel":"031-1234-1234", 
//           "title_food":"숯불고기", 
//           "zip": "01245", 
//           "address": "도로명 주소랍니다.", 
//           "address_old": "지번주소랍니다.", 
//           "latitude": "37.7449333", 
//           "longitude": "127.2079146",
//           "radius": "150"
//         },
//         { 
//           "id": 5, 
//           "sigun" : "김포시",
//           "title":"풀잎속의 생명", 
//           "tel":"031-1234-1234", 
//           "title_food":"생명정식, 풀잎정식", 
//           "zip":"01245", 
//           "address": "도로명 주소랍니다.", 
//           "address_old": "지번주소랍니다.", 
//           "latitude": "37.6218241", 
//           "longitude": "126.7226352",
//           "radius": "100"
//         }
//       ])
// });

app.listen(port, ()=> console.log( `Listening on port ${port}`));