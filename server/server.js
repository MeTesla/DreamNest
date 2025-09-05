const express = require('express')
const router = require('./routes/userRoute')
const dotenv = require('dotenv').config()
const app=express()


app.use(router)


app.listen(process.env.PORT, ()=>{
    console.log('connected')
})