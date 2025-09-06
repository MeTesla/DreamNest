const mongoose = require('mongoose')

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
        ref: 'Appartement',
    },
    favoris:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Appartements',
    }

})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel