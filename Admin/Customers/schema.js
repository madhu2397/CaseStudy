const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema1 = new Schema({
    Name:{
        type: String,
        required:true        
    },

    Email:{
        type: String,
        lowercase: true,
        unique: true
        // required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address']
    },
    
    Address:{
        type: String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },

    Ratings:{
        type:Number,
        required:true
    }
})

const Customer = mongoose.model("Customer",customerSchema1);
module.exports = Customer;