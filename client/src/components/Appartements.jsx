import React, {useState, useEffect} from 'react'
import CardAppartement from './CardAppartement'
function Appartements() {
  const [appartements, setAppartements] = useState([])
  
  const getApts = async()=>{
    const reponse = await fetch('http://localhost:3000/appartements')
    const data = await reponse.json()
    setAppartements(data)
    console.log(data);
    
  }

  useEffect(()=>{
    getApts()
  },[])
  
  return (
    <div className='appartements' style={{display:'flex', flexWrap:'wrap', gap: '20px', padding:'20px'}}>
      {appartements.map((appartement,index)=>(
        <CardAppartement 
            key={index}
            id={appartement._id}
            adresse={appartement.adresse}
            options = {appartement.options}
            categorie={appartement.categorie}
            images={appartement.images}
            proprietaire={appartement.proprietaire}
        />
      ))}
    </div>
  )
}

export default Appartements
