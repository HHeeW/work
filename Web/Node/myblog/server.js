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
});
//Route for creating posts
app.get('/api/create', (req, res)=>{
    const username = req.body.userName;
    const password = req.body.userPass;
    const title = req.body.title;
    const text = req.body.text;
})
db.query(
    "insert into blog_posts (title, post_text, user_name, pass) values (?, ?, ?, ?)",
    [title, text, username, password],
    (err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    }
)

//Update

//delete
app.post('/api/delete', (req, res)=>{
    const id = req.body.id;
    const pass = req.body.pass;
    db.query("delete from blog_posts where id=? and pass=?", [id, pass], (err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send(1);
        }else{
            res.send(0)
        }
    })
})

//listen
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})