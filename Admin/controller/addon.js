const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Addon1 = require("../model/addons");

router.use(bodyParser.json());
//handling errors
// const handleErrors = (err) => {
//     let error = {
//       name: "",
//       forServices: "",
//       cost: "",
//       status: "",
//     };
  
//     //duplicate service plan name
//     if (err.code === 11000) {
//       error.name = "Entered addon name is already present";
//       return error;
//     }
  
//     if (err.message.includes("Addon validation failed")) {
//       Object.values(err.error).forEach(({ properties }) => {
//         error[properties.path] = properties.message;
//       });
//     }
//     return error;
//   };

router.get("/addon", (req, res) => {
    Addon1.find({}).then((addon) => {
        res.send(addon);
        console.log(addon);
    }).catch((err) => {
        res.send(err.message);
    })

})

router.post("/addon", (req, res) => {
    Addon1.create(req.body).then((addon) => {
        res.send(addon);
        console.log(addon);
    }).catch((err) => {
        res.send(err);
    })
})

router.put("/addon/:id", (req, res) => {
    Addon1.findOneAndUpdate({ _id: req.params.id }, (req.body)).then(() => {
        Addon1.findOne({ _id: req.params.id }).then((addon) => {
            res.send(addon);
            console.log(addon);
        }).catch((err) => {
            res.send(err);
        })
    })

    router.delete("/addon/:id", (req, res) => {
        Addon1.findByIdAndRemove({ _id: req.params.id }, (req.body)).then((addon) => {
            res.send("Item Removed successfully");
            console.log(addon);
        }).catch((err) => {
            res.send(err);
            console.log(err);
        })
    })
})

module.exports = router;