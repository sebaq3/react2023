import { useState } from 'react'
import './App.css'
import { Pelis } from './Peliculas/Pelis'
import Series from './series/Series'


const App = () => {
  return (
    <>
      <div>
      <Pelis></Pelis>
      <Series></Series>
      </div>
      
    </>
  )
}


export default App
