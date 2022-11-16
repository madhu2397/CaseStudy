const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Order1 = require("../model/orders");
var authMiddle = require("../../Auth/Middleware/middleware");
router.use(bodyParser.json());

router.get("/order", (req, res) => {
    Order1.find({}).then((order) => {
        res.send(order);
        console.log(order);
    }).catch((err) => {
        res.send(err.message);
    })
})

router.post("/order",authMiddle, (req, res) => {
    Order1.create(req.body).then((order) => {
        console.log(order);
        res.send("Thank You we will let you know");
    }).catch((err) => {
        res.send(err);
    })

})

router.put("/order/:id", (req, res) => {
    Order1.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Order1.findOne({ _id: req.params.id }).then((order) => {
            res.send(order);
            console.log(order);
        }).catch((err) => {
            res.send(err);
        })
    })
})

router.delete('/order/:id', (req, res) => {
    Order1.findByIdAndRemove({ _id: req.params.id }).then((order) => {
        res.send("Order removed successfully!");
        console.log(order);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;