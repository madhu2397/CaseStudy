const express = require("express");
const app = express();
const port = process.env.PORT || 4545;
const mongoose = require("mongoose");
const CusRoute = require("./controller/customer");
// const OrderRoute = require("./controller/order");
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
    // app.get("/customer/:id",(req,res)=>{
    //     Admin1.findById(req.params.id).then((admin)=>{
    //         if(admin){
    //             axios.get("http://localhost:4545/customer/"+ admin.CustomerID).then((response)=>{
    //                 console.log(response);
    //             })
    //         }else{
    //             res.send("invalid request");
    //         }
    //     })
    // })
//search washer
    // app.get("/search/:name", (req, res) => {
    //     axios.get("http://localhost:7000/wash").then((response) => {     
    //     var regex = new RegExp({FirstName: req.params.name},'i');
    //         Customer1.find({name:regex}).then((result)=>{
    //             response.status(200).json(result);
    //         }).catch((e)=>{
    //             console.log(e.message);
    //         })
    //     })
        // .catch((err) => {
        //     console.log(err.message);
        // })
    // })

// app.get("/search/name", (req, res) => {
//         axios.get("http://localhost:7000/wash").then((response) => {
//             var regex = new RegExp(req.params.name,'i');
//             Washer1.find({name:regex})
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     })
app.get("search/name",(req,res)=>{
    var regex = new RegExp(req.params.name,'i');
    Washer1.find({name:regex}).then((result)=>{
        res.send(result);
    })
})
module.exports =app.listen(port,(req,res)=>{
    console.log("Server up and running at port " + port);
})
