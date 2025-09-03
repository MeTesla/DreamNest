import { useState } from 'react'
import './App.css'

import Registre from './pages/Registre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registre />
    </>
  )
}

export default App
