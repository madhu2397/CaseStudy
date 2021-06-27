const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    Name:{
        type: String,
        require:true,
        // trim: true
    },
    Email:{
        type: String,
        // trim: true,
        lowercase: true,
        unique: true,
    },
    Password:{
        type:String,
        // trim: true,
        required:true
    },
    Car_no: {
        type: Number,
        required: true
    },
    Model_no: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model("Customer",customerSchema);
module.exports = Customer;