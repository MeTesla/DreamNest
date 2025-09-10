const express= require('express')
const jwt = require('jsonwebtoken')

const userAuth=(req, res, next)=>{
    const {authorization} = req.headers
    
    if(!authorization){
      return res.json({'message':'Vous n\'êtes pas autorisés'})    
    } 

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({
        success: false,
        error: "You must be logged in",
      });
    }

    const { id } = payload;

    req.proprietaireId = id;

    next();
  });
}

module.exports=userAuth