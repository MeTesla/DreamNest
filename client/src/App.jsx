{/*Voir comment ne pas autoriser l'accès à register & login en cas de User */}

import { useState, useContext } from 'react'
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom';
import {UserContextProvider, userContext} from './context/AuthContext'
import './App.css'


import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Favoris from './pages/Favoris';

// {} :  element= {<Home />} 
function App() {
  const user = useContext(userContext)

  return (
    <>
    
      <BrowserRouter>
        <UserContextProvider>
          <Routes>          
            <Route path='/' element= {<Home />} />
            <Route path='/register' element= {user ? <Navigate to="/" />: <Register />} /> {/*Voir comment restreindre l'accès à register & login en cas de User */}
            <Route path='/login' element= {user ? <Navigate to="/" /> : <Login />} />
            
            <Route element ={<ProtectedRoutes />}>              
              <Route path='/favoris' element= {<Favoris />} />
            </Route>  

          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
