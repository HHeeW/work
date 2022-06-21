const express = require('express');
const router = express.Router();

router.use((req,res,next=>{
    res.locals.use = null;
    res.locals.follwCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
}))
//내정보
router.get('/profile', (req, res)=>{
    res.send('내정보')
})

//회원가입
router.get('/join', (req,res)=>{
    res.send('회원가입')
})

//메인
router.get('/', (req, res, next)=>{
    res.send('메인')
})