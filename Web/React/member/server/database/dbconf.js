const mysql = require('mysql');
const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'good6617',
    database: 'study01'
});
module.exports = database;