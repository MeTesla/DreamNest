import React from 'react'

function CardAppartement({adresse, categorie, options, images}) {
  return (
    <div>
      <h3>{adresse}</h3>
      <h3>{categorie}</h3>
      <h3>{options}</h3>
      <h3>{images}</h3>
    </div>
  )
}

export default CardAppartement
