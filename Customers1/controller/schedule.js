const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Schedule1 = require("../model/schedules");
router.use(bodyParser.json());

router.get("/schedule", (req, res) => {
    Schedule1.find({}).then((order) => {
        res.send(order);
        console.log(order);
    }).catch((err) => {
        res.send(err.message);
    })
})

router.post("/schedule", (req, res) => {
    Schedule1.create(req.body).then((order) => {
        console.log(order);
        res.send("Thank You we will let you know about your order");
    }).catch((err) => {
        res.send(err);
    })

})

router.put("/schedule/:id", (req, res) => {
    Schedule1.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Schedule1.findOne({ _id: req.params.id }).then((order) => {
            res.send(order);
            console.log(order);
        }).catch((err) => {
            res.send(err);
        })
    })
})

router.delete('/schedule/:id', (req, res) => {
    Schedule1.findByIdAndRemove({ _id: req.params.id }).then((order) => {
        res.send("Order removed successfully!");
        console.log(order);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;