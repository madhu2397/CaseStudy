var express = require('express');
var app = express();
 
//Import Routes
var authRoutes = require("./Controller/auth");
app.use('/', authRoutes);
 
app.listen(2000, ()=>{
    console.log('Server ' + 2000 + " listening");
});