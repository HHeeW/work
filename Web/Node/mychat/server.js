const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose')

let database;
let UserSchema;
let UserModel;

const connectDB = () =>{
    const databaseUrl = 'mongode://127.0.0.1:27017/local'
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    database.on('open',()=>{

    })
}
//에러 핸들러 모듈
//const expressErrorHandler = require('express-error-handler');
const app = express();
app.setMaxListeners('port',4000);

//static
app.use('/', static(path.join(__dirname,'public')));

//bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}))