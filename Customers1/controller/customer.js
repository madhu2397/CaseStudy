const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Customer1 = require("../model/Schema");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
router.use(bodyParser.json());

router.get("/customer",(req,res)=>{
    Customer1.find({}).then((Customer)=>{
        res.send( Customer);
        console.log(Customer);
    }).catch((err)=>{
        res.send(err.message);
    })
})

router.post("/customer",(req,res)=>{
    Customer1.create(req.body).then((Customer)=>{
        res.send(Customer);
    }).catch((err)=>{
        res.send(err);
    })

})

router.put("/customer/:id",(req,res)=>{
    Customer1.findOneAndUpdate({_id: req.params.id},req.body).then(()=>{
        Customer1.findOne({_id: req.params.id}).then((Customer)=>{
            res.send(Customer);
            console.log(Customer);
        }).catch((err)=>{
            res.send(err);
        })
    })
})

router.delete('/customer/:id', (req, res) => {
    Customer1.findByIdAndRemove({ _id: req.params.id }).then((Customer) => {
        res.send("Item removed successfully!");
        console.log(Customer);
    }).catch((err) => {
        res.send(err);
    })
});

        searchWasher = (req , res )=> {
        MongoClient.connect(
        'mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/washer?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(connectErr, client) {
          assert.equal(null, connectErr);
          const coll = client.db('washer').collection('washers');
          const query = {FirstName : "washer"}
          coll.find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          client.close();
        });
    })
}
module.exports = router;