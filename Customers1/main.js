const express = require("express");
const app = express();
const port = process.env.PORT || 4545;
const mongoose = require("mongoose");
const CusRoute = require("./controller/customer");
const OrderRoute = require("./controller/order");
const ScheduleRoute = require("./controller/schedule");
const axios = require("axios")
const swaggerUi = require("swagger-ui-express");
const Washer1 = require("../Washer/model/washers");
//auth
const cookieParser = require('cookie-parser');
// const requireAuth = require("./middleware/authMiddleware");
app.use(express.json());
app.use(cookieParser());
// const user = require("./model/User");
const { response } = require("express");
//swagger
swaggerDocument = require("./car.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/customer-car?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

// app.get('*', checkUser);
app.use("/", CusRoute);
app.use("/", OrderRoute);
app.use("/", ScheduleRoute);

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
//view washer 
app.get("search/name",(req,res)=>{
    var regex = new RegExp(req.params.name,'i');
    Washer1.find({name:regex}).then((result)=>{
        res.send(result);
    })
})
//view order status
app.get("/vieworder", (req, res) => {
    axios.get("http://localhost:7000/orderw").then((response) => {
        // console.log(response.data);
        var order = response.data;
        res.send(order);
    }).catch((err) => {
        console.log(err.message);
    })
})
module.exports =app.listen(port,(req,res)=>{
    console.log("Server up and running at port " + port);
})
