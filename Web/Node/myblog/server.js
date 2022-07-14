const express = require('express');
const cors = require('cors');
const db = require('./dbconfig/db');
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

//Route to get all posts
app.get('/api/get', (req, res)=>{
    db.query('select * from blog_posts', (err, result)=>{
        if(err){
            console.log(err)
        }
        res.send(result);
    })
});

//Route to get one posts
app.get('/api/view/:id', (req, res)=>{
    const id= req.params.id;
    db.query('selsect * from blog_posts where id=?', id, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})


//listen
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})