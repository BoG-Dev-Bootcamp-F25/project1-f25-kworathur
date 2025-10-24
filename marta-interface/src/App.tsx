import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LinesPage from './pages/LinesPage'
import { useMatch } from 'react-router-dom'
import { lines } from './components/NavBar'




function App() {
  const match = useMatch('/lines/:name');

  console.log(lines)
  const line = lines.filter(l => l.name === match?.params.name)[0]
  return (
      <LinesPage line={line} />
  )
}

export default App
