import React, { useState } from 'react'
import Start from './Components/Start'
import GamePage from './Components/GamePage'

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openGamePage = () => {
    setIsOpen((prev)=>!prev);
  }

  return (
    <>
      {isOpen? <GamePage /> : <Start open={openGamePage} /> }
    </>
  )
}

export default App