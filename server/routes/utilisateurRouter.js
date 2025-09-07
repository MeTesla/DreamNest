const express= require('express')
const router= express.Router()

// New user
router.post('/register', async(req, res)=>{
    const {nom, prenom }  = req.body
    // if(!nom || !prenom || !email || !password || !profileImage){
    //     return res.json({message: 'Tous les champs sont requis'})
    // }
    console.log('karim')
    res.json(nom)
    
})

// Login user
router.post('/login', async(req, res)=>{

})

// Ajout appartement
router.post('/appartements/new', async(req, res)=>{

})

// Voir tous les appartements
router.get('/apprtements/all', async(req, res)=>{

})

// Voir mon/mes appartements
router.get('/appartements/mesappartements', async(req, res)=>{

})

// Détails d'un appartement
router.get('/appartements/:id', async(req, res)=>{

})

// Voir mes favoris
router.get('/appartements/favoris', async(req, res)=>{

})

// Louer un appartement
// A verfiier /:id
router.post('/appartements/location/:id', async(req, res)=>{

})


router.get('/', (req, res)=>{
    res.send('<h1>GET All from router</h1>')
})


module.exports=router