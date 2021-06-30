const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');
api.use(bodyParser.json());
const port = 3535;
//Admin
//get admin
// api.get('/admin',(req,res)=>{​​​​​​​​
// axios.get('http://localhost:3000/create',req.body).then((response)=>{​​​​​​​​
// res.send(response.data);
//     }​​​​​​​​)
// }​​​​​​​​)
 
//get service
api.get('/service',(req,res)=>{​​​​​​​​
axios.get('http://localhost:3000/admins',req.body).then((response)=>{​​​​​​​​
res.send(response.data);
    }​​​​​​​​)
}​​​​​​​​)
 
//get promo
api.get('/promo',(req,res)=>{​​​​​​​​
axios.get('http://localhost:3000/adminp',req.body).then((response)=>{​​​​​​​​
res.send(response.data);
    }​​​​​​​​)
}​​​​​​​​)
 
//get addon
api.get('/addon',(req,res)=>{​​​​​​​​
axios.get('http://localhost:3000/addon',req.body).then((response)=>{​​​​​​​​
res.send(response.data);
    }​​​​​​​​)
}​​​​​​​​)

//customer
//get customer
api.get('/customer',(req,res)=>{​​​​​​​​
    axios.get('http://localhost:4545/customer',req.body).then((response)=>{​​​​​​​​
    res.send(response.data);
        }​​​​​​​​)
    }​​​​​​​​)

//Washer
//get washer
api.get('/washer',(req,res)=>{​​​​​​​​
    axios.get('http://localhost:7000/wash',req.body).then((response)=>{​​​​​​​​
    res.send(response.data);
        }​​​​​​​​)
    }​​​​​​​​)    
    module.exports = api.listen(port, (req, res) => {
        console.log("Server up and running at port " + port);
    })