const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/admin",(req,res)=>{
    res.send("Hey I am the payment page");
})

app.listen(port,(req,res)=>{
    console.log("server Up and running on port"+ port);
})