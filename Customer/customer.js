const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/customer",(req,res)=>{
    res.send("Hey I am at Customer page");
})

app.listen(port,(req,res)=>{
    console.log("Server up and running at port " + port);
})