const express = require('express')
const router = express.Router();
const contact = require("../models/contactSchema")

router.post("/newContact",(req,res)=>{
    let newContact = new contact(req.body)
    newContact.save((err,data)=>{
        if(err) throw err
        else res.send(data)
    })
})

router.get("/getuser/:id",(req,res)=>{
    contact.find({_id:req.params.id},
        (err,data)=>{
        if (err) throw err
        else res.json(data)
    })
})

router.put("/update/:id",(req,res)=>{
    contact.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
        if (err) throw err
        else res.json(req.body)
    })
})

router.delete("/delete/:id",(req,res)=>{
    contact.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        if(err) throw err 
        else res.json({msg:"deleted"})
    })
})
module.exports = router