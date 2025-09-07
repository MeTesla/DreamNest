const mongoose = require('mongoose')

const appartementSchema = new mongoose.Schema({
    proprio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    // locataire:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Utilisateur'
    // },
    titre: {
        type: String,
        required,
    },
    description:{
        type: String,
        required
    },
    photos:{
        type:[String],
        required:true,
    },
    type:{
        type: String,
        required,
    },
    options:{
        type: [String]
    },
    adresse:{
        type: String,
        required,
    }
    // ville:{
    //     type: String,
    //     required
    // },
    // quartier:{
    //     type: String,
    //     required,
    // },
    // numero:{
    //     type: String,
    //     required,
    // },
    // rue: {
    //     type: String,
    //     required
    // }
})

const AppartementModel = mongoose.model('Appartement', appartementSchema)
module.exports = AppartementModel
