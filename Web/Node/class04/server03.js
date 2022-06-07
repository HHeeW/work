const http = require('http');
const server = http.createServer();
const port = 4000;

server.listen(port, ()=>{
    console.log(`웹 서버가 ${port}포트로 시작 되었습니다.`)

})
server.on('connection', (soket)=>{
    let addr = soket.address();
    console.log('클라이언트가 접속했습니다 : %s, %d', addr.address, addr.port);
})

server.on('request', (req, res)=>{
    console.log('클라이언트의 요청이 들어왔습니다.')
    //console.dit(req)
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<meta charset="UTF-8">');
    res.write('<title>응답페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>nodeJS 웹 서버가 요청에 대해 응답합니다.</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})