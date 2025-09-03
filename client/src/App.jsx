import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {UserContextProvider} from './context/AuthContext'
import './App.css'


import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Favoris from './pages/Favoris';

// {} :  element= {<Home />} 
function App() {

  return (
    <>
    
      <BrowserRouter>
        <UserContextProvider>
          <Routes>          
            <Route path='/' element= {<Home />} />
            <Route path='/register' element= {<Register />} />
            <Route path='/login' element= {<Login />} />
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
