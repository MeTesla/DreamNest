const express= require('express')

const multer = require('multer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { hash } = require('bcrypt');
const utilisateurRouter= express.Router()
const UtilisateurModel = require('../models/UtilisateurModel')
utilisateurRouter.use(express.json())

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname ); // Use the original file name
  },
}); 
const upload = multer({ storage });

// New user
utilisateurRouter.post('/register', upload.single("profileImage"),async(req, res)=>{
    const {nom, prenom, email, password}  = req.body
    if(!nom || !prenom || !email || !password){
        return res.json({message: 'Tous les champs sont requis'})
    }
    const profileImage = req.file;
    if (!profileImage) {
      return res.status(400).send("No file uploaded");
    }

    /* path to the uploaded profile photo */
    const profileImagePath = profileImage.path;
    const path = profileImagePath.replace(/\\/g, '/')

    //user Existe
    const userExists = await UtilisateurModel.findOne({email})
    if(userExists) return(res.json({message: 'Ce compte existe déjà'}))

    /* Hass the password */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const utilisateur = new UtilisateurModel({
      nom,
      prenom,
      email,
      password: hashedPassword,
      profileImagePath
    })
    await utilisateur.save()
    // Token
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });
    }; 
    const token = generateToken(utilisateur._id)

    try{
        res.json(token)
    }catch(err){
        res.json({erreur: err.message})
    }
})

// Login user
utilisateurRouter.post('/login', async(req, res)=>{

})

// Ajout appartement
utilisateurRouter.post('/appartements/new', async(req, res)=>{

})

// Voir tous les appartements
utilisateurRouter.get('/apprtements/all', async(req, res)=>{

})

// Voir mon/mes appartements
utilisateurRouter.get('/appartements/mesappartements', async(req, res)=>{

})

// Détails d'un appartement
utilisateurRouter.get('/appartements/:id', async(req, res)=>{

})

// Voir mes favoris
utilisateurRouter.get('/appartements/favoris', async(req, res)=>{

})

// Louer un appartement
// A verfiier /:id
utilisateurRouter.post('/appartements/location/:id', async(req, res)=>{

})


utilisateurRouter.get('/', (req, res)=>{
    res.send('<h1>GET All from utilisateurRouter</h1>')
})


module.exports=utilisateurRouter