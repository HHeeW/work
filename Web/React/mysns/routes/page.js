const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

//로그인 or Profile
router.get('/profile', (req, res)=>{
    res.render('profile', { title: 'MYSNS - 내 정보 '});
});

//회원가입
router.get('/join', (req, res)=>{
    res.render('join', { title: 'MYSNS 회원가입'});
});

router.get('/', (req, res, next)=>{
    const snser = [];
    res.render('main', {
        title: 'MYSNS',
        snser
    });
});

module.exports = router;