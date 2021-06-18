const express = require("express");
const app = express();

const port = process.env.PORT || 7000;

app.get("/washer",(req,res)=>{
    res.send("Hey I am at Washer page");
})

app.listen(port,(req,res)=>{
    console.log("Up and running at port " + port);
})