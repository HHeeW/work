const express = require("express");
const app = express();
const cors = require("cors");
const Api = require("./ApiRouter");

app.use(cors())

app.use("/api", Api);

app.get("/", (req, res)=>{
    res.send("server open");
});
const port = 3000;

app.listen(port, () =>{
    console.log(`port ${port}`)
})