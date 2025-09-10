const express= require('express')
const multer = require('multer')
const AppartementModel = require('../models/AppartementModel')
const appartementRouter = express.Router()
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


//--------------------- Ajout appartement
appartementRouter.post('/appartements/ajout-appartement',
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

//Voir tous les appartements
appartementRouter.get('/apprtements', async(req, res)=>{
  const data = await AppartementModel.find()
  res.json(data)
})

// Voir mon/mes appartements
appartementRouter.get('/appartements/mesappartements', async(req, res)=>{

})

// Détails d'un appartement
appartementRouter.get('/appartements/:id', async(req, res)=>{

})

// Voir mes favoris
appartementRouter.get('/appartements/favoris', async(req, res)=>{

})

// Louer un appartement
// A verfiier /:id
appartementRouter.post('/appartements/location/:id', async(req, res)=>{

})

module.exports= appartementRouter