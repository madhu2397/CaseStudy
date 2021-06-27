const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Admin1 = require("../model/creatsa");

router.use(bodyParser.json());

router.get("/create", (req, res) => {
    Admin1.find({}).then((admin) => {
        res.send(admin);
        console.log(admin);
    }).catch((err) => {
        res.send(err.message);
    })

})

router.post("/create", (req, res) => {
    Admin1.create(req.body).then((admin) => {
        res.send(admin);
        console.log(admin);
    }).catch((err) => {
        res.send(err);
    })
})

router.put("/create/:id", (req, res) => {
    Admin1.findOneAndUpdate({ _id: req.params.id }, (req.body)).then(() => {
        Admin1.findOne({ _id: req.params.id }).then((admin) => {
            res.send(admin);
            console.log(admin);
        }).catch((err) => {
            res.send(err);
        })
    })

    router.delete("/create/:id", (req, res) => {
        Admin1.findByIdAndRemove({ _id: req.params.id }, (req.body)).then((admin) => {
            res.send("Item Removed successfully");
            console.log(admin);
        }).catch((err) => {
            res.send(err);
            console.log(err);
        })
    })
})

module.exports = router;
