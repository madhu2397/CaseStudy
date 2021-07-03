const Stripe = require('stripe');
const express = require('express');
const payment = express();
const port = 5555;
payment.use(express.json());
const stripe = Stripe(`sk_test_51J8iZmSI27YZaWYO2ck2u66VisdRQld1Y0k6q2JsPYHYAOPI7Rm2YDLSpRpQL1AhxSkTXanCvs0NoOWVHWYphi1d00fp508mzR`);
payment.post('/payment', async (req, res) => {
    try {
        console.log(req.body); 
        const amount = req.body.amount*100;
        const email = req.body.email;
        await stripe.charges.create({
            amount: amount,
            currency: "inr",
            source: "tok_mastercard",
            metadata: { 'order_id': '6565' }
        }, function (err, result) {
            console.log(result.amount/100);
            //console.log(err);
            res.send(`payment succesfull for ${email} of ${result.amount/100}rs transaction id is ${result.balance_transaction} you can check receipt at ${result.receipt_url}`);
        })      
    } catch (err) {
        console.log(err);
    }
})
payment.listen(port,()=>{
    console.log("server up and running");
})

// payment.listen(port, () => {
//     console.log("connected to server");
// })
// stripe.charges.create({
//     amount:5000,
//     currency:"inr",
//     source:"tok_mastercard",
//     metadata:{"order_id":"6735"}
// },function(err,res){
//     app.post("/payment",(req,res)=>{

//     })
//     console.log(res);
// });