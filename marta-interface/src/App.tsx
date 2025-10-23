import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LinesPage from './pages/LinesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <LinesPage />
    </div>
  )
}

export default App
