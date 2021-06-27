const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
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
    },
    Password:{
        type:String,
        trim: true,
        required:true
    }
})

const Admin = mongoose.model("admin",AdminSchema);
module.exports = Admin;