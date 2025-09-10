import React from 'react'

function CardAppartement({adresse, categorie, options, images}) {
  return (
    <div style={{border: '1px solid'}}>
      <h3>Adresse :</h3>
      <div>{adresse}</div>
      <h3>Catégorie</h3>
      <div>{categorie}</div>
      <h3>Options</h3>
        <ul> {options[0].split(',').map((opt, ind)=>(
                <li style={{listStyle:'square'}} key={ind}>{opt + " "}</li>
            ))}
        </ul> 
      <h3>Images</h3>
      <div className="images" style={{ display:'flex', gap:'30px'}}>
            {images.map((img, key)=>(
                <div key={key} style={{width:'200px', height:'140px'}}>
                    <img src={`http://localhost:3000/${img.replace('public/','')}`} style={{width:'100%', height:'100%'}} />
                </div>
            ))}
        </div>
      <hr />
    </div>
  )
}

export default CardAppartement
