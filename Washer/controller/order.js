const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Orderw1 = require("../model/orders");
const MongoClient = require('mongodb').MongoClient;
router.use(bodyParser.json());
var authMiddle = require("../../Auth/Middleware/middleware");

router.get("/orderw", (req, res) => {
    Orderw1.find({}).then((order) => {
        res.send(order);
        console.log(order);
    }).catch((err) => {
        res.send(err.message);
    })
})
router.post("/orderw", (req, res) => {
    Orderw1.create(req.body).then((order) => {
        console.log(order);
        res.send("Your order is accepted");
    }).catch((err) => {
        res.send(err);
    })

})

router.put("/orderw/:id", (req, res) => {
    Orderw1.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Orderw1.findOne({ _id: req.params.id }).then((order) => {
            res.send(order);
            console.log(order);
        }).catch((err) => {
            res.send(err);
        })
    })
})

router.delete('/orderw/:id', (req, res) => {
    Orderw1.findByIdAndRemove({ _id: req.params.id }).then((order) => {
        res.send("Order removed successfully!");
        console.log(order);
    }).catch((err) => {
        res.send(err);
    })
});
//searching by location
router.get("/search/:address", (req, res) => {
    MongoClient.connect(
        'mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/customer-car?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (connectErr, client) {
            const coll = client.db('customer-car').collection('orders');
            const query = { Address: req.params.address }
            coll.find(query).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                client.close();
            });
        })
})
module.exports = router;