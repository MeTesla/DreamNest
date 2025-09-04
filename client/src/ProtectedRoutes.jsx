import React, {useState, useContext} from 'react'
import { Outlet , Navigate} from 'react-router-dom'
import { userContext } from './context/AuthContext'

function ProtectedRoutes() {
    const {user} = useContext(userContext)
    console.log(user);
    
  return (
    <div>
      {user ? <Outlet /> : <Navigate to='/' /> }
    </div>
  )
}

export default ProtectedRoutes
