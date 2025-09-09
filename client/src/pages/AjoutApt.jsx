import React, { useEffect, useState } from 'react'
import '../styles/ajoutApt.css'
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { FaDog } from "react-icons/fa6";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { MdOutlineGarage } from "react-icons/md";
import { MdOutlineIron } from "react-icons/md";

function AjoutApt() {
    const [aptImg, setAptImg] = useState([])
    const [categorie, setCategorie] = useState('')
    const [selectedCategorie, setSelectedCategorie] = useState('')

    const [options, setOptions] = useState([])
    const [multipleSel, setMultipleSel] = useState([])

    const optionsIcons=[
        {
            nom:'wifi',
            icone:<IoWifi />
        },
        {
            nom: 'dog' ,
            icone: <FaDog />
        }        ,
        {
            nom: 'cuisine',
            icone:<TbToolsKitchen2/>
        },
        {
            nom: 'tv',
            icone:<FaTv />
        },
        {
            nom: 'garage',
            icone:<MdOutlineGarage />
        },
        {
            nom: 'repassage' ,
            icone:<MdOutlineIron />
        },
    ]

    useEffect(()=>{
        if (categorie=='') return
        console.log(categorie)
    },[categorie])

    function handleMultipleSel(key){      
        if(multipleSel.includes(key)){
            setMultipleSel(prev=>
                prev.filter(option=> option !== key)                                
            )
        } else{
                setMultipleSel(prev=>[...prev, key])                
            }
    }
//     if (amenities.includes(facility)) {
//       setAmenities((prevAmenities) =>
//         prevAmenities.filter((option) => option !== facility)
//       );
//     } else {
//       setAmenities((prev) => [...prev, facility]);
//     }
   return (

    <div className='ajout-apt'>
      <form className='form-ajout-apt'>        
        <h1>Ajouter des photos du logement</h1>
        {aptImg && aptImg.map(img=>(
            <div className="apt-img">
                <img src={URL.createObjectURL(img)} alt="apt img" />
            </div>
        ))}
        <div className="apt-photos">
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
                 {['Appartement', 'Studio', 'ville'].map((apt, index)=>(
                <div
                    key={index}
                    // className={selectedCategorie === apt ? 'selected': ''}
                    // onClick={(e)=>{setSelectedCategorie(e.target.innerText)}}
                    className={index === selectedCategorie ? 'selected': ''}
                    onClick={(e)=>{
                        setSelectedCategorie(index);
                        setCategorie(apt)  
                    }}
                >
                    {apt}
                </div>
            ))}
            </div>
           
        </div>

        <h1>Adresse : </h1>
        <div className="adresse">
            <textarea name="adress" id="" rows="5">

            </textarea>
        </div>

        <h1>Décrire mieux le logement</h1>
        <div className="options">
            
        {optionsIcons.map((option, index)=>(
            <div
                key={index}
                className={multipleSel.includes(option.nom) ? "selected" : "" }
                onClick={()=>handleMultipleSel(option.nom)}
            >{option.icone}
            </div>
 
        ))}    
            
        </div>
        <div className='submit'>
            <button  type="submit">Ajouter</button>
            <button  type="">Annuler</button>
        </div>
      </form>
    </div>
  )
}

export default AjoutApt
