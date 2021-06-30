const express = require("express");
const app = express();
const port = process.env.PORT || 4545;
const mongoose = require("mongoose");
const CusRoute = require("./controller/customer");
const axios = require("axios")
const swaggerUi = require("swagger-ui-express");
const Washer1 = require("../Washer/washers");
//auth
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
app.use(express.json());
app.use(cookieParser());
const user = require("./model/User");
const { response } = require("express");
//swagger
swaggerDocument = require("./car.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/customer-car?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

app.get('*', checkUser);
app.use("/", CusRoute);
// app.use("/", OrderRoute);

app.get("/viewservice", (req, res) => {
    axios.get("http://localhost:3000/admins").then((response) => {
        // console.log(response.data);
        var service = response.data;
        res.send(service);
    }).catch((err) => {
        console.log(err.message);
    })
})
//view promoCodes
    app.get("/viewpromo", (req, res) => {
        axios.get("http://localhost:3000/adminp").then((response) => {
            // console.log(response.data);
            var promo = response.data;
            res.send(promo);
        }).catch((err) => {
            console.log(err.message);
        })
    })
    
app.get("search/name",(req,res)=>{
    var regex = new RegExp(req.params.name,'i');
    Washer1.find({name:regex}).then((result)=>{
        res.send(result);
    })
})
module.exports =app.listen(port,(req,res)=>{
    console.log("Server up and running at port " + port);
})
