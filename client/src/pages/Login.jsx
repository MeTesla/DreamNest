import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/AuthContext'
import '../styles/login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(userContext)

    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        const reponse= await fetch('http://localhost:3000/login',{
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({email, password})
        })
        const data = await reponse.json()
        console.log(data);
        
        
        setUser(true)
        navigate('/') // note (/home)
    }

    
  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1>Login </h1>
        <input 
            type="email" 
            name="email" 
            placeholder="Votre émail"
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
            required

        />

        <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={password}
            onChange = {(e)=>setPassword(e.target.value)}
            required
        />

        <button type="submit">Enregister</button>
      </form>
    </div>
  )
}

export default Login
