import { useState } from 'react'
import './App.css'
import { Pelis } from './Peliculas/Pelis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Pelis></Pelis>
      </div>
      
    </>
  )
}

export default App
