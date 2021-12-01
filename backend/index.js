const express = require('express')
const app =express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require('mongoose')
const URI = process.env.URI
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const register = require('./register')
app.use('/registeruser',register)
const io = socketio(server,{
    cors:{
        origin:'http://localhost:4200',
        method:['POST','GET']
    }
})
app.use(cors())
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}).catch(err => {
    console.log(Error, err.message);
  })
  .then(() => console.log("DB Connected!"))
const userschema =mongoose.Schema({
    firstName:{
        required:true,
        type:String,
        minLength:3
    },
    lastName:{
        required:true,
        type:String,
        minLength:3
    },
    email:{
        required:true,
        type:String,
        minLength:3
    },
    password:{
        required:true,
        type:String,
        minLength:1
    }

})

const port = 2022



io.on('connection', (socket) =>{
    console.log('connectednn')
})


server.listen(port,()=>{
    console.log('connected')
})