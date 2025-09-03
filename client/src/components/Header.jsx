import {useContext, useState} from 'react'
import { userContext } from '../context/AuthContext'
import '../styles/header.css'
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


import logoChef from '../assets/logoChef.png'


function Header() {
    const {user, setUser} = useContext(userContext)
    const [isConnected, setIsConnected] = useState(user)
    console.log(user);
    
    function handleShowMenu(){
        setIsConnected(!isConnected)
        console.log(isConnected);       
    }

    function handleLogout(e){
        e.stopPropagation()
        setUser(!user)
    }

    return (
    <div className='header'>
      <div className="logo">
        <img src={logoChef} alt="Chef-logo" />
      </div>
      <div className="user" onClick={handleShowMenu}>
        <div className="icons">
            <IoMdMenu size={30} />
            <FaUser size={20} />            
        </div>
        <div className={`menus ${isConnected && 'show' }`}  >
            {isConnected ?
                <div className='connected'>
                    <div>Wish List</div>
                    <div>My favorite</div>
                    <div onClick={handleLogout}>Logout</div>
                </div>
                :
                <div className='disconnected'>
                    <div>Login</div>
                    <div>Rigister</div>
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Header
