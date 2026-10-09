const mongoose = require("mongoose")

const LinkSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model("Link",LinkSchema)