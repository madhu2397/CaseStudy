const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    
    Name:{
        type: String,
        require:true,
        // trim: true
    },
    Mobile:{
        type: Number,
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
    },
    booked_time : {
        type : Date,
        default : Date.now()
    }
});

const order = mongoose.model("order",orderSchema);
module.exports = order;
