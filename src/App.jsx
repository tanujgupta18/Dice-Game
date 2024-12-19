import './index.css'
import { useState } from 'react'
import Homepage from './components/Homepage'
import Gameplay from './components/Gameplay'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !(prev))
  }
  return (
    <div>
      {
        isGameStarted ? <Gameplay /> : <Homepage toggle={toggleGamePlay} />
      }

    </div>
  )
}

export default App
