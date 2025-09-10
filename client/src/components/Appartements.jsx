import React, {useState, useEffect} from 'react'

function Appartements() {
    const [appartements, setAppartements] = useState([])
  const getApts = async()=>{
    const reponse = await fetch('http://localhost:3000/apprtements')
    const data = await reponse.json()
    
    setAppartements(data)
    console.log(data);
    
  }
  useEffect(()=>{
    getApts()
  },[])
  return (
    <div className='appartements'>
      {appartements.map((appartement,index)=>(
        <div key={index} className="apt">
            <h3 > {appartement.adresse} </h3>
            <div> {appartement.categorie} </div>
            <div> {appartement.options[0].split(',').map((opt, ind)=>(
                <span key={ind}>{opt + " "}</span>
            ))} 
            </div>
            <h2>Images de {appartement.categorie}</h2>
            <div className="images" style={{ display:'flex', gap:'30px'}}>
                {appartement.images.map((img, key)=>(
                    <div key={key} style={{width:'200px', height:'140px'}}>
                        <img src={`http://localhost:3000/${img.replace('public/','')}`} style={{width:'100%', height:'100%'}} />
                    </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Appartements
