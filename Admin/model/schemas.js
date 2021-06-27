const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
    ServiceName:{
        type:String,
        required:true
    },
    Time:{
        type: String,
        required:true
    },
    Cost:{
        type: Number,
        required:true
    },
    Description:{
        type: String,
        required:true
    },
    status: {
        type: "string",
        lowercase: true,
    
        enum: ["active", "inactive"],
        default: "active",
      }
})

const Service = mongoose.model("service", ServiceSchema);
module.exports = Service;