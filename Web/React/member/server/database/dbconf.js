const mysql = require('mysql');
const dbfonf = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '3223',
    database: 'smapleDB'
});
module.exports = dbfonf;