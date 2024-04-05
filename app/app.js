const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/AlienDB"
// GET - http://localhost:9000/AlienDB

const app =  express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', () => {
    console.log("Connected...");
})

const alienRouter = require('./routers/alien')
app.use('/alien', alienRouter)
 
app.listen(9000, () =>{
    console.log('Server Started..');
})