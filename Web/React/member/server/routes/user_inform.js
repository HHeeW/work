const express = require('express');
const router = express.Router();
const dbfonf = require('../database/dbconf');

router.get('/onlogin', (req, res)=>{
    const user_id = req.query.user_id;
    const user_pw = req.query.uer_pw;
    const memSQL = 'SELECT * FROM member WHERE userid = ?'
    dbconf.query(memSQL, user_id, (err, data)=>{
        if(err){
            res.send(err);
        }else{
            if(data.length < 1){
                res.send({'msg' : '없는 아이디 입니다. 다시 확인하세요'})
            }else{
                if(user_pw != data[0].userpass){
                    res.send({'msg' : '비밀번호가 틀렸습니다. 다시확인하세요.'})
                }
                else{
                    res.send({'msg' : '로그인 성공'})
                }
            }
        }
    })
    res.send({data: 'loginok'});
});
module.exports = router;