const express = require("express");
const app = express();

const port = process.env.PORT || 6000;

app.get("/service",(req,res)=>{
    res.send("Hey I am at service page");
})

app.listen(port,(req,res)=>{
    console.log("server Up and running on port" + port);
})