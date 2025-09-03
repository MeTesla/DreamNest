import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        console.log(email, password);
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
