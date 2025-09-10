const mongoose = require('mongoose')

const appartementSchema = new mongoose.Schema({
    proprietaire:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    // locataire:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Utilisateur'
    // },
    // titre: {
    //     type: String,
    //     required,
    // },
    // description:{
    //     type: String,
    //     require
    // },
    images:{
        type:[String],
        required:true,
    },
    categorie:{
        type: String,
        require,
    },
    options:{
        type: [String],
        require
    },
    adresse:{
        type: String,
        require,
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
