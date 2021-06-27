const mongoose = require("mongoose");
const Schema = mongoose.Schema
const signupSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required: true,
        minlength: 5
    }
});
const Signup = mongoose.model("signup", signupSchema);
module.exports = Signup;