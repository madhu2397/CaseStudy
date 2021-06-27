const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Service1 = require("../model/schemas");

router.use(bodyParser.json());

router.get("/admins",(req,res)=>{
    Service1.find({}).then((service)=>{
        res.send(service);
        console.log(service);
    }).catch((err)=>{
        res.send(err.message);
        console.log(err);
    })
})

router.post("/admins",(req,res)=>{
    Service1.create(req.body).then((service)=>{
        res.send(service);
        console.log(service);
    }).catch((err)=>{
        res.send(service);
        console.log(service);
    })
})

router.put("/admins/:id",(req,res)=>{
    Service1.findOneAndUpdate({_id: req.params.id},(req.body)).then(()=>{
        Service1.findOne({_id: req.params.id}).then((service)=>{
            res.send(service);
            console.log(service);
        }).catch((err)=>{
            res.send(err.message);
            console.log(err);
        })
    })
})

router.delete("/admins/:id",(req,res)=>{
    Service1.findByIdAndRemove({_id: req.params.id},(req.body)).then((service)=>{
        res.send("Item deleted succesfully");
        console.log(deleted);
    }).catch((err)=>{
        res.send(err);
        console.log(deleted);
    })
})
module.exports = router;