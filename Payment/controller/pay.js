const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Payment1 = require("../model/pays");
router.use(bodyParser.json());

router.get("/payment", (req, res) => {
    Payment1.find({}).then((payment) => {
        res.send(payment);
        console.log(payment);
    }).catch((err) => {
        res.send(err.message);
    })
})

router.post("/payment", (req, res) => {
    Payment1.create(req.body).then((payment) => {
        res.send(payment);
    }).catch((err) => {
        res.send(err);
    })

})

router.put("/payment/:id", (req, res) => {
    Payment1.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Payment1.findOne({ _id: req.params.id }).then((payment) => {
            res.send(payment);
            console.log(payment);
        }).catch((err) => {
            res.send(err);
        })
    })
})

router.delete('/payment/:id', (req, res) => {
    Payment1.findByIdAndRemove({ _id: req.params.id }).then((payment) => {
        res.send("Item removed successfully!");
        console.log(payment);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;