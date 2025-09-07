const mongoose =require('mongoose')

const reservationShcema = new mongoose.Schema({
    proprio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    locataire:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    dataReservation:{
        type: Date,
    },
    dateFinReservation:{
        type: Date,
    },
    nombrePersonnes:{
        type: Number
    }
})