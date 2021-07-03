const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Washer1 = require("../model/washers");

router.use(bodyParser.json());

router.get("/wash",(req,res)=>{
    Washer1.find({}).then((washer)=>{
        res.send(washer);
        console.log(washer);
    }).catch((err)=>{
        res.send(err.message);
    })
    
})

router.post("/wash",(req,res)=>{
    Washer1.create(req.body).then((washer)=>{
        res.send(washer);
        console.log(washer);
    }).catch((err)=>{
        res.send(err);
    })
})

router.put("/wash/:id",(req,res)=>{
    Washer1.findOneAndUpdate({_id: req.params.id},(req.body)).then(()=>{
        Washer1.findOne({_id: req.params.id}).then((washer)=>{
            res.status(201).send(washer);
            console.log(washer);
        }).catch((err)=>{
            res.status(400).send(err);
        })
    })

router.delete("/wash/:id",(req,res)=>{
    Washer1.findByIdAndRemove({_id: req.params.id},(req.body)).then((washer)=>{
        res.send("Item Removed successfully");
        console.log(washer);
    }).catch((err)=>{
        res.send(err);
        console.log(err);
    })
})    
})

module.exports = router;
