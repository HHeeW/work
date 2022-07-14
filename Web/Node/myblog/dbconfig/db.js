const mysql = require('mysql');

const db = mysql.createConnection({
    host: localhost,
    user: 'root',
    password: 'HfvD5471*%',
    database: 'blogdb'
});

module.exports = db;