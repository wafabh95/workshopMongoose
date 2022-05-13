const express = require('express')
const app = express()
const mongoose= require('mongoose')
app.use(express.json())
const port=5000
mongoose.connect("mongodb+srv://mongodb-user:rootroot@cluster0.ckjkp.mongodb.net/workshopmongoose?retryWrites=true&w=majority",()=>
console.log("database is connect"));
app.use('/',require("./routes/userRoutes.js"));
app.listen(port,()=>console.log("listening in port 5000"))