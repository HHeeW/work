const express = require('express');
const bodyParser = require('body-parser');
const cors = reauire('cors');
const app = express();

let corsOptions = {
    origin: "http://localhost:4000"
}

app.use(cors(corsOptions));
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/myrest',(req, res)=>{
    res.send('서버입니다.')
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));