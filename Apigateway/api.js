const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');
api.use(bodyParser.json());
const port = process.env.PORT || 4000;

//Admin
//get admin
api.get('/admin', (req, res) => {
    axios.get('http://localhost:3000/create', req.body).then((response) => {
        res.send(response.data);
    })
})

//get service
api.get('/service', (req, res) => {
    axios.get('http://localhost:3000/admins', req.body).then((response) => {
        res.send(response.data);
    })
})

//get promo
api.get('/promo', (req, res) => {
    axios.get('http://localhost:3000/adminp', req.body).then((response) => {
        res.send(response.data);
    })
})

//get addon
api.get('/addon', (req, res) => {
    axios.get('http://localhost:3000/addon', req.body).then((response) => {
        res.send(response.data);
    })
})

//Customer
//get customer
api.get('/customer', (req, res) => {
    axios.get('http://localhost:4545/customer', req.body).then((response) => {
        res.send(response.data);
    })
})

//Washer
//get washer
api.get('/washer', (req, res) => {
    axios.get('http://localhost:7000/wash', req.body).then((response) => {
        res.send(response.data);
    })
})
//post customer
api.post("/postcustomer", (req, res) => {
    axios.post("http://localhost:4545/customer", req.body
    ).then((response) => {
        console.log(response.data);
        var customer = response.data;
        res.send(customer);
    }).catch((err) => {
        console.log(err.message);
    })
})

//post washer
api.post("/postwasher", (req, res) => {
    axios.post("http://localhost:7000/wash", req.body
    ).then((response) => {
        console.log(response.data);
        var washer = response.data;
        res.send(washer);
    }).catch((err) => {
        console.log(err.message);
    })
})
//post payment
//payment
api.post("/postpay", (req, res) => {
    axios.post("http://localhost:5555/payment", req.body
    ).then((response) => {
        console.log(response.data);
        var payment = response.data;
        res.send(payment);
    }).catch((err) => {
        console.log(err.message);
    })
})
api.listen(port, (req, res) => {
    console.log("Server up and running at port " + port);
})
