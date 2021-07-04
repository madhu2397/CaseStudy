const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Customer1 = require("../model/Schema");
const MongoClient = require('mongodb').MongoClient;
router.use(bodyParser.json());
var authMiddle = require("../../Auth/Middleware/middleware");
const axios = require("axios")
// const payment = require("../../Payment/payment1");
// const requireAuth = require("../middleware/authMiddleware");
// const authController = require("../controller/authController")

router.get("/customer",authMiddle, (req, res) => {
    Customer1.find({}).then((Customer) => {
        res.send(Customer);
        console.log(Customer);
    }).catch((err) => {
        res.send(err.message);
    })
})

router.post("/customer", (req, res) => {
    Customer1.create(req.body).then((Customer) => {
        res.send(Customer);
    }).catch((err) => {
        res.send(err);
    })

})

router.put("/customer/:id", (req, res) => {
    Customer1.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Customer1.findOne({ _id: req.params.id }).then((Customer) => {
            res.send(Customer);
            console.log(Customer);
        }).catch((err) => {
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

router.get("/leaderboard", function (req, res) {
    Customer1
        .find({}, function (err, doc) {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).send(doc);
            }
        })
        .sort({ noOfwash: -1 });
});

router.get("/searchwasher/:name", (req, res) => {
    MongoClient.connect(
        'mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/washer?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (connectErr, client) {
            const coll = client.db('washer').collection('washers');
            const query = { FirstName: req.params.name }
            coll.find(query).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                client.close();
            });
        })
})
//search order acceptance
router.get("/search/:name", (req, res) => {
    MongoClient.connect(
        'mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/washer?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (connectErr, client) {
            const coll = client.db('washer').collection('orderws');
            const query = { Name: req.params.name }
            coll.find(query).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                client.close();
            });
        })
})
//payment
    router.post("/postpay", (req, res) => {
        axios.post("http://localhost:5555/payment", req.body
        ).then((response) => {
            console.log(response.data);
            var payment = response.data;
            res.send(payment);
        }).catch((err) => {
            console.log(err.message);
        })
    })
module.exports = router;