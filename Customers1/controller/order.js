// const express = require("express");
// const app = express();
// const router = express.Router();
// const bodyParser = require("body-parser");
// const Order1 = require("../model/orders");

// router.use(bodyParser.json());

// router.get("/order",(req,res)=>{
//     Order1.find({}).then((Customer)=>{
//         res.send( Customer);
//         console.log(Customer);
//     }).catch((err)=>{
//         res.send(err.message);
//     })
// })

// router.post("/order",(req,res)=>{
//     Order1.create(req.body).then((Customer)=>{
//         res.send(Customer);
//     }).catch((err)=>{
//         res.send(err);
//     })

// })

// router.put("/order/:id",(req,res)=>{
//     Order1.findOneAndUpdate({_id: req.params.id},req.body).then(()=>{
//         Customer1.findOne({_id: req.params.id}).then((Customer)=>{
//             res.send(Customer);
//             console.log(Customer);
//         }).catch((err)=>{
//             res.send(err);
//         })
//     })
// })

// router.delete('/order/:id', (req, res) => {
//     Order1.findByIdAndRemove({ _id: req.params.id }).then((Customer) => {
//         res.send("Item removed successfully!");
//         console.log(Customer);
//     }).catch((err) => {
//         res.send(err);
//     })
// });

// router.get("/order/:id",(req,res)=>{
//     Customer1.findById(req.params.id).then((admin)=>{
//         if(admin){
//             axios.get("http://localhost:7000/"+ wash.washID).then((response)=>{
//                 console.log(response);
//             })
//         }else{
//             res.send("invalid request");
//         }
//     })
// })
// module.exports = router;