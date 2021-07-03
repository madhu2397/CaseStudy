const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WasherSchema = new Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true,
        unique:true
    },
    Ratings:{
        type:Number,
        required:true
    }
})
const Washer = mongoose.model("Washer",WasherSchema);
module.exports = Washer;