import React from 'react'
import '../styles/ajoutApt.css'
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { FaDog } from "react-icons/fa6";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { MdOutlineGarage } from "react-icons/md";
import { MdOutlineIron } from "react-icons/md";

function AjoutApt() {
  return (

    <div className='ajout-apt'>

      <form className='form-ajout-apt'>
        
        <div className="apt-photos">
            <h1>Ajouter des photos du logement</h1>
            <div className="photos">
                <input type="file" name="photos" id="photos" 
                    accept='image/*'
                    style={{display:'none'}}
                />
                <label htmlFor="photos">
                    <MdOutlineCloudUpload size={50}/>
                    <div>Photo de profile</div>
                </label>
            </div>
        </div>

        <div className="categorie">
            <h1>Catégorie du logement : </h1>
            <div className="categories">
                <div className="choix">Studio</div>
                <div className="choix">Appartement</div>
                <div className="choix">Villa</div>
            </div>
        </div>
        
        <h1>Adresse : </h1>
        <div className="adresse">
            <textarea name="adress" id="" rows="5">

            </textarea>
        </div>

        <h1>Décrire mieux le logement</h1>
        <div className="options">
            <div className="wifi">
                <span>Wifi</span>
                 <IoWifi size={40} />
            </div>
            <div className="dog">
                <span>Chien</span>
                <FaDog size={40} />
            </div>
            <div className="cuisine">
                <span>Cuisine</span>
                <TbToolsKitchen2 size={40} />    
            </div>
            <div className="tv">
                <span>TV</span>
                <FaTv size={40} />
            </div>
            <div className="garage">
                <span>Garage</span>
                <MdOutlineGarage size={40} />
            </div>
            <div className="fer">
                <span>Repassage</span>
                <MdOutlineIron size={40} />
            </div>
        </div>
        <div>
            <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  )
}

export default AjoutApt
