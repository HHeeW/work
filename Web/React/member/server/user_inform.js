const express = require('express');
const router = express.Router();
const database = require('./database/dbconf');

router.get('/login', (req, res)=>{
    res.send({data: 'loginok'});
});
module.exports = router;