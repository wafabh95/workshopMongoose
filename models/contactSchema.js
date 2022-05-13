const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const contactSchema={
    firstname:String,
    lastname:String,
    phoneNumber:Number,
    email:{
        type:String,
        required:true,
    },
    password:{type:String},
    address:{
        city:String,
        code:Number,
    }
}
const contact = mongoose.model("contact",contactSchema)
module.exports = contact