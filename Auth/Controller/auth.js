const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

//IMPORT ROUTES
const User = require("../../Auth/model/auths");
const { registerschema, loginschema } = require("../../Auth/Controller/validation");

router.use(express.json());

//Connect to DB
const dbURL =
  "mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/Auth?retryWrites=true&w=majority";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
console.log("connection successful");

// Add new user - register
router.post("/register", async (req, res) => {
  const { error } = registerschema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  console.log(emailExist);
  if (emailExist)
    return res.status(400).json({ message: "Email already exist!" });

  User.create(req.body).then((newdata) => {
      res.send({ newdata });
    }).catch((err) => {
      console.log(err);
    });
});


//JWT token 
const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'Madhuri', {
        expiresIn: maxAge
    })
}

//user login
router.post("/login", async (req, res) => {

  const { error } = loginschema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) return res.status(400).send({ message: " Email does not exist!" });
  //res.json({ userid: emailExist._id });

  //const token = jwt.sign({_id: User._id}, 'fhencjskholjoupuk');
  const token = createToken(User._id)
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
  console.log(token);

  res.send("Succesfully Login");
});
module.exports = router;