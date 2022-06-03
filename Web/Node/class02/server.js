const gttp = require('http');
const fs = require('fs');
const QueryString = require('qs');
const qs = require(QueryString);

const app = http.createServer((req,res)=>{
    const url = req.url;
    const fullUrl = new URL('httpL//localhost:4000'+url);
    const pathName = fullUrl.pathName;

    if(pathName === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write(`
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    div{
                        width: 1000px;
                        padding: 30px;
                        border-bottom: 1px solid #ddd;
                        margin: 20px auto;
                    }
                    input, textarea{
                        width: 100%;
                        padding: 10px;
                    }
                    textarea{
                        height: 100px;
                    }
                    button{
                        padding: 10px 30px;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <footer action="/writeAction" method="post">
                    <div>
                        <label>타이틀</label>
                        <input type="text" name="title" placeholder="타이틀" required>
                    </div>
                    <div>
                        <label>내용</label>
                        <textarea name="description"placeholder="설명">

                        </textarea>
                    </div>
                    <div>
                        <button type="submit">전송</button>
                    </div>
                </footer>
            </body>
            </html>
        `);
        res.end();
    }else{

    }
})
app.listen(4000, ()=>{console.log('4000번 포트 웹서버 시작')})