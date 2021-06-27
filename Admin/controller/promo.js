const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Promo1 = require("../model/promos");

router.use(bodyParser.json());

router.get("/adminp",(req,res)=>{
    Promo1.find({}).then((promo)=>{
        res.send(promo);
        console.log(promo);
    }).catch((err)=>{
        res.send(err.message);
    })
    
})

router.post("/adminp",(req,res)=>{
    Promo1.create(req.body).then((promo)=>{
        res.send(promo);
        console.log(promo);
    }).catch((err)=>{
        res.send(err);
    })
})

router.put("/adminp/:id",(req,res)=>{
    Promo1.findOneAndUpdate({_id: req.params.id},(req.body)).then(()=>{
        Promo1.findOne({_id: req.params.id}).then((promo)=>{
            res.send(promo);
            console.log(promo);
        }).catch((err)=>{
            res.send(err);
        })
    })

router.delete("/adminp/:id",(req,res)=>{
    Promo1.findByIdAndRemove({_id: req.params.id},(req.body)).then((promo)=>{
        res.send("Item Removed successfully");
        console.log(promo);
    }).catch((err)=>{
        res.send(err);
        console.log(err);
    })
})    
})

module.exports = router;
