import React from 'react'
import Favoris from '../pages/Favoris'
import { Link } from 'react-router-dom'
import imgApp from '../assets/app.jpg'
import '../styles/slider.css'

function Slider() {
  return (
    <div className='slider'>
        {/* <Link to='/Favoris'>Favoris</Link> */}
        <div className="img-app">
          <img src={imgApp} alt="Image d'appartement" style={{width: '100%'}} />
        </div>
        <div className="titres">
          <h1>Gorgeous Condo on Golf Course Near Broadway</h1>
          <h3>The spacious apartment with a balcony and sea views has 3 bedrooms, a living room, a flat</h3>
        </div>
    </div>
  )
}

export default Slider
