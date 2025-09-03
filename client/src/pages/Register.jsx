import { useState, useContext, useEffect } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../styles/register.css'
import { userContext } from "../context/AuthContext";
/*
 const {name, value, files} = e.target
 setRegisterData({})
 je dois m'assurer que tous les champs sont dans formData
*/
function Registre(){
     const {user, setUser} = useContext(userContext)
     const navigate = useNavigate()
    useEffect(()=>{      
        if (user) console.log(user);
    }, [])
       
    const [registerData, setRgisterData] = useState({
        nom:'', prenom:'', email:'',
        password: '', confirmPassword:'',
        profileImage: null
    })

    
    const handleChanges = (e)=>{
        const {name, value, files} = e.target
        setRgisterData({    
            ...registerData,
            [name]: (name === 'profileImage' ? files[0] : value )
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData= new FormData()
        // je dois m'assurer que tous les champs sont dans formData
        for (let cle in registerData) formData.append(cle, registerData[cle])
        
        for (const [cle, valeur] of formData.entries()) console.log(`${cle} : ${valeur}`);
        
        setUser(true)
        navigate('/')        
    }
    return(
        <div className="register-page">
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Reginster</h1>
                <input 
                    type="text" 
                    name="nom" 
                    placeholder="Votre nom"
                    value={registerData.nom}
                    onChange = {handleChanges}
                    required
                />

                <input 
                    type="text" 
                    name="prenom" 
                    placeholder="Votre preéom"
                    value={registerData.prenom}
                    onChange = {handleChanges}
                    required

                />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Votre émail"
                    value={registerData.email}
                    onChange = {handleChanges}
                    required

                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={registerData.password}
                    onChange = {handleChanges}
                    required
                />

                <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirmer le mot de passe"
                    value={registerData.confirmPassword}
                    onChange = {handleChanges}
                    required
                />

                <div className="profile-image">
                    <input 
                    type="file" 
                    name="profileImage"
                    id="image" 
                    accept="image/*"
                    placeholder="Votre nom"                    
                    onChange = {handleChanges}
                    required
                    style={{display:'none'}}
                />

                <label htmlFor="image">
                    <MdOutlineCloudUpload size={50}/>
                    <div>Photo de profile</div>
                </label>

                <div className="">
                    {registerData.profileImage && 
                    <img src={URL.createObjectURL(registerData.profileImage)} 
                    style={{width:'140px', margin: 'auto'}}
                    alt="" />}
                </div>
                </div>

                <button type="submit">Enregister</button>
            </form>
        </div>
    )
}

export default Registre