const mongoose = require('mongoose')

const utilisateurSchema = new mongoose.Schema({
    nom : {
        type: String,
        require
    },
    prenom : {
        type: String,
        require
    },
    email:{
        type: String,
        require,        
    },
    password:{
        type: String,
        require,
    },
    profileImagePath:{
        type: String,
        require,
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

const UtilisateurModel = mongoose.model('Utilisateur', utilisateurSchema)

module.exports = UtilisateurModel