const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Signup1 = require("../sign/schema");
const { JsonWebTokenError } = require("jsonwebtoken");
// const Signup = require("../sign/schema");
router.use(bodyParser.json());
const maxAge = 3*24^60*60;
const createToken = (id)=>{
    return jwt.sign({id}, "name is madhuri",{
        expiresIn: maxAge
    });
}
router.get("/",(req,res)=>{
    Signup1.find({}).then((signup)=>{
        res.send(signup);
        console.log(signup);
    }).catch((err)=>{
        res.send(err.message);
    })
})


router.post("/",(req,res)=>{
    Signup1.create(req.body).then((signup)=>{
        
        const token = createToken(signup._id);
        res.cookie = ("jwt",token, {httpOnly:true, maxAge: maxAge*1000});
        res.send(signup);
        console.log(signup._id);
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password);

        try{
            const res = fetch("/signs",{
                method : "POST",
                body: JSON.stringify({email, password}),
                headers:{"Content-Type":"application/json"}
            })
        }catch(err){
            console.log(err);
        }
    }).catch((err)=>{
        res.send(err);
    })
})

module.exports = router;
/*

yignup = async(req,res)=>{
    const { email, password }= req.body;

    try{
        const Signup2 =  await Signup.create({ email, password});
        res.status(400).json(Signup2);
    }
    catch(err){
        console.log(err.message);
        res.status(400).send("user not created");
    }
}
// router.post("/",(req,res)=>{
//     const {email, password} = req.body
//     try{
//         Signup1.create({email, password});
//         res.status(201).json(signup);
//     }catch(err){
//        console.log(err);
//        res.status(400).send(err)
//     }
// })
module.exports = router;*/