const express= require('express')

const multer = require('multer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { hash } = require('bcrypt');
const utilisateurRouter= express.Router()
const UtilisateurModel = require('../models/UtilisateurModel')
const AppartementModel = require('../models/AppartementModel')
utilisateurRouter.use(express.json())

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

// Generate token function
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });
    }; 
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

    const token = generateToken(utilisateur._id)

    try{
        res.json(token)
    }catch(err){
        res.json({erreur: err.message})
    }
})

// Login user
utilisateurRouter.post('/login', async(req, res)=>{
  const {email, password} = req.body

  const userExists = await UtilisateurModel.findOne({email})
  
  if(!userExists){    
    return  res.json({success: false, message:'Ce compte n\'existe pas'})
  }

  //comparer Mots de passe
  // Compare le mot de passe fourni avec le hash stocké
  const match = await bcrypt.compare(password, userExists.password);
  if (!match) return res.status(400).json({ error: 'L\'émail ou le mot de passe est incorrect' });
  
    //renvoyer token
  const token = generateToken(userExists._id)
  res.json({success:true, token})
})

// Ajout appartement
utilisateurRouter.post('/appartements/ajout-appartement',
upload.array('images', 10) ,async(req, res)=>{
  const {categorie, adresse, options} = req.body
  if(!categorie || !adresse || !options){
    return res.json({success:false, message:'Tous les champs sont requis !'})
  }
  
  const imagesReq = req.files
  //Paths from images
  
  function generatePaths(images){
    const paths=[]
    images.forEach(img=>{
      const imagePath = img.path
      paths.push(imagePath.replace(/\\/g, '/'))
    })
    return paths
  }
  const images= generatePaths(imagesReq)
    
  const appartement = new AppartementModel({
     categorie, adresse, options, images
  })
  await appartement.save()
  res.json(appartement)
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