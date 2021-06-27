const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const mongoose = require("mongoose");
const signupRoute = require("../sign/signs");
const cookieParser = require("cookie-parser");

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/signupDB?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});
app.use("/signup", signupRoute);
app.use(cookieParser());

app.listen(port,(req,res)=>{
    console.log(`server is up and running at ${port}`);
})