import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardAppartement from '../components/CardAppartement'
function DetailsApt() {
  const [details, setDetails] = useState(null)
  const {id}=useParams()

  useEffect(()=>{        
    const detailsApt= async()=>{
      const reponse = await fetch(`http://localhost:3000/appartements/${id}`)
      const data =  await reponse.json()      
      setDetails(data)
    }

    detailsApt()
  },[])
  
  return (
    <div style={{width: '50%', margin: 'auto'}}>
      <h1>appartement </h1>
       {details && <CardAppartement //oublier |details &&| erreur. temps chargements 0.00002s de retard
            id={details._id}
            adresse={details.adresse}
            options = {details.options}
            categorie={details.categorie}
            images={details.images}
        />}
    </div>
  )
}

export default DetailsApt
