const mysql = require('mysql');
const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '3223',
    database: 'sampledb'
});
module.exports = database;