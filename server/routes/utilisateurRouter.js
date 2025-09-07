const express= require('express')
const multer = require('multer')
const utilisateurRouter= express.Router()
utilisateurRouter.use(express.json())

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
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
    console.log(profileImage);
    
    if (!profileImage) {
      return res.status(400).send("No file uploaded");
    }

    /* path to the uploaded profile photo */
    const profileImagePath = profileImage.path;
    
    try{
        res.json({nom, prenom})
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