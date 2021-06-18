const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Customer1 = require("./schemaw");

router.use(bodyParser.json());

router.get("/",(req,res)=>{
    // res.send("hey");
    Customer1.find({}).then((Customer)=>{
        res.send( Customer);
        console.log(Customer);
    }).catch((err)=>{
        res.send(err.message);
    })
})

router.post("/",(req,res)=>{
    Customer1.create(req.body).then((Customer)=>{
        res.send(Customer);
    }).catch((err)=>{
        res.send(err);
    })
    // res.send("testing");
    // console.log(req.body);
})

router.put("/:id",(req,res)=>{
    Customer1.findOneAndUpdate({_id: req.params.id},req.body).then(()=>{
        Customer1.findOne({_id: req.params.id}).then((Customer)=>{
            res.send(Customer);
            console.log(Customer);
        }).catch((err)=>{
            res.send(err);
        })
    })
})

router.delete('/:id', (req, res) => {
    Customer1.findByIdAndRemove({ _id: req.params.id }).then((Customer) => {
        res.send("Item removed successfully!");
        console.log(Customer);
    }).catch((err) => {
        res.send(err);
    })
});


module.exports = router;