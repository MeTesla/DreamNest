const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nom : {
        type: String,
        required
    },
    prenom : {
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
    profileImage:{
        type: String,
        required,
    },
    appartements:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Appartement',
    },
    favoris:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Appartement',
    }, 
    mesLocations:{},
})

const UtilisateurModel = mongoose.model('User', userSchema)

module.exports = UtilisateurModel