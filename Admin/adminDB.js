const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json);

mongoose.connect("mongodb+srv://Case-study:casestudy@cluster0.fbzn5.mongodb.net/caseStudy?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});


app.get("/admin/db",(req,res)=>{
    res.send("Testing");
})

app.post("/admin1",(req,res)=>{
    console.log(req.body);
    res.send("testing the admin");
})
app.listen(3001,()=>{
    console.log("server up and running");
})





