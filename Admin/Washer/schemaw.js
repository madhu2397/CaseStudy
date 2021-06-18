const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema1 = new Schema({
    Name:{
        type: String,
        require:true,
        trim: true
    },

    Email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address']
    },
    
    Address:{
        type: String,
        require:true,
        trim: true
    },

    Password:{
        type:String,
        trim: true,
        required:true
    },

    Ratings:{
        type:Number,
        required:true
    }
})

const Customer = mongoose.model("Customer",customerSchema1);
module.exports = Customer;