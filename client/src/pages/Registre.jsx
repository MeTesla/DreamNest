import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import '../styles/register.css'

function Registre(){
    const [registerData, setRgisterData] = useState({})

    const formData= new FormData()
    const handleChanges = (e)=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('form')
    }
    return(
        <div className="register-page">
            <form onSubmit={handleSubmit} className="register-form">
                <input 
                    type="text" 
                    name="nom" 
                    placeholder="Votre nom"
                    value={""}
                    onChange = {handleChanges}
                    required

                />

                <input 
                    type="text" 
                    name="prenom" 
                    placeholder="Votre preéom"
                    value={""}
                    onChange = {handleChanges}
                    required

                />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Votre émail"
                    value={""}
                    onChange = {handleChanges}
                    required

                />

                <input 
                    type="text" 
                    name="password" 
                    placeholder="Password"
                    value={""}
                    onChange = {handleChanges}
                    required
                />

                <input 
                    type="text" 
                    name="confirmPassword" 
                    placeholder="Confirmer le mot de passe"
                    value={""}
                    onChange = {handleChanges}
                    required
                />

                <input 
                    type="file" 
                    name="profileImage"
                    id="image" 
                    accept="image/*"
                    placeholder="Votre nom"
                    value={""}
                    onChange = {handleChanges}
                    required
                    style={{display:'none'}}
                />

                <label htmlFor="image">
                    <MdOutlineCloudUpload size={32}/>
                    <div>Votre photo de profile</div>
                </label>

                <div className="">
                    {/* <img src="" alt="" /> */}
                </div>

                <button type="submit">Enregister</button>
            </form>
        </div>
    )
}

export default Registre