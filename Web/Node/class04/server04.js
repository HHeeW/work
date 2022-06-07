const http = require('http');
const fs = require('fs');
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
    const file = 'tr01.png';
    const infile = fs.createReadStream(file, {flags: 'r'});
    infile.pipe(res);
})