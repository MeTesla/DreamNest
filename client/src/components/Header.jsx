import {useContext} from 'react'
import { userContext } from '../context/AuthContext'

function Header() {
    const {user} = useContext(userContext)
    console.log(user);
    
    return (
    <div>
      Header
    </div>
  )
}

export default Header
