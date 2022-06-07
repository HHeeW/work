const http = require('http');
const options = {
    host: 'www.musecom.net',
    port: 80,
    path: '/'
};

const req = http.get(options, (res)=>{
    let resData = '';
    res.on('data', (chunk)=>{
        resData += chunk;
    });
    res.on('end', ()=>{
        console.log(resData);
    })
    req.on('error', (err)=>{
        console.log('에러가 발생했습니다.' + err.message);
    })
})