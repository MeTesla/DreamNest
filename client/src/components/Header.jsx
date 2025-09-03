import {useContext, useState} from 'react'
import { userContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';

import '../styles/header.css'
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


import logoChef from '../assets/logoChef.png'


function Header() {
    const {user, setUser} = useContext(userContext)
    const [showMenu, setShowMenu] = useState(false)
    
    function handleShowMenu(){
        setShowMenu(!showMenu)
    }

    function handleLogout(e){
        e.stopPropagation()
        setUser(!user)
        setShowMenu(!showMenu)
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
        <div className={`menus ${showMenu && 'show' }`}  >
            {user ?
                <div className='connected'>
                    <div>Wish List</div>
                    <div>My favorite</div>
                    <div onClick={handleLogout}>Logout</div>
                </div>
                :
                <div className='disconnected'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Header
