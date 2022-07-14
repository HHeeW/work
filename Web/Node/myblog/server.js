const express = require('express');
const db = require('./dbconfig/db');
//const cors = require('cors');

const app = express();
const PORT = 4000;
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route to get all posts
app.get('/api/get', (req, res)=>{
    db.query('select * from blog_posts', (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
});

//Route for like
app.post('/api/like/:id', (req, res)=>{
   const id = req.params.id;
   db.query('update blog_posts set likes = likes + 1 where id = ?', id, (err,result)=>{
      if(err){
         console.log(err);
      }
      res.send(result);
   });
});

//Route to get one post
app.get('/api/view/:id', (req, res)=>{
    const id = req.params.id;
    db.query('select * from blog_posts where id = ?', id, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
});

//Route for creating the post
app.post('/api/create', (req, res)=>{
    const username = req.body.userName; 
    const password = req.body.userPass;
    const title = req.body.title; 
    const text = req.body.text;

    db.query(
        "insert into blog_posts (title, post_text, user_name, pass) values (?, ?, ?, ?)" ,
        [title, text, username, password], 
        (err, result)=>{
          if(err){
            console.log(err);
          }
          console.log(result);
    })    
});

  app.post('/api/delete', (req, res)=>{
      const id = req.body.id;
      const pass = req.body.pass;
      db.query("delect from blog_posts where id=? and pass=?", [id, pass], (err, result)=>{
          if(err){
             console.log(err);
          }
          if(result){
              res.send(1);
          }else{
              res.send(0);
          }
      })
  })

//listen
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});