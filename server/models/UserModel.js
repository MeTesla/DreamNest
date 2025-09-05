const mongoose = require('mongoose')
const express = requoire('exress')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required
    },
    email:{
        type: String,
        required,
        
    },
    password:{
        type: String,
        required,
    },
    appartements:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'AppartementModel',
    },
    favoris:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'AppartementsModel',
    }

})

const UserModule = mongoose.model('User', userSchema)