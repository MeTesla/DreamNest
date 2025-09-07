const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/utilisateurRouter')
const dotenv = require('dotenv').config()
const app=express()

app.use(cors())
app.use(express.json());


app.use('/',userRouter)

mongoose.connect(process.env.URL)
    .then(() => {
        console.log('Connexion à la base de données réussie !');
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
    });

app.listen(process.env.PORT, ()=>{
    console.log('Connexion au serveur réussie !')
})