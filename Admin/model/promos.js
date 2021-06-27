const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PromoSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Discount:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:2
    },
    Service:{
        type:String,
        required:true,
    },
    Expireon:{
        type: Date,
        required:true
    },
    status: {
        type: "string",
        lowercase: true,
        enum: ["active", "inactive"],
        default: "active",
      }
})

const Promo = mongoose.model("Promocode",PromoSchema);
module.exports = Promo;