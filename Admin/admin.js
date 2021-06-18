const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const CustomerRoutes = require("../Admin/Customers/Customer")
// const CustomerRoute = require("../Admin/Washer/washer")

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/Admin?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

app.use("/admin", CustomerRoutes)

app.listen(port,(req,res)=>{
    console.log("Server up and running at port " + port);
})
