const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({    
    Name:{
        type: String,
        require:true,
        // trim: true
    },
    Mobile:{
        type: String,
        required:true
    },
    booked_time : {
        type : Date,
        default : Date.now()
    },
    Response:{
        type: String,
        required: true
    }
});

const orderw = mongoose.model("orderw",orderSchema);
module.exports = orderw;
