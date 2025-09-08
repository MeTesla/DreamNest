import React, { useEffect, useContext } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { userContext } from '../context/AuthContext'
function Home() {
  const {user, setUser} = useContext(userContext)
  useEffect(()=>{
    setUser(localStorage.getItem('token'))
  },[])
  return (
    <div>
      <Slider />
    </div>
  )
}

export default Home
Home