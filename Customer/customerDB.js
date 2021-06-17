const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://Case-study:casestudy@cluster0.fbzn5.mongodb.net/Customer?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

app.listen(4545,()=>{
    console.log("server up and running");
})





