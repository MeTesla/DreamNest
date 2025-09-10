import React, { useEffect, useContext } from 'react'
import Header from '../components/Header'
import { userContext } from '../context/AuthContext'
import Slider from '../components/Slider'
import Appartements from '../components/Appartements'
function Home() {
  const {user, setUser} = useContext(userContext)
  useEffect(()=>{
    setUser(localStorage.getItem('token'))
  },[])
  return (
    <div>
      <Slider />
      <Appartements />      
    </div>
  )
}

export default Home
Home