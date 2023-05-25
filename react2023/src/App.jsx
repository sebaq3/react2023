import { useState } from 'react'
import './App.css'
import { Pelis } from './Peliculas/Pelis'
import { Series }  from './series/Series'
import { Noticias } from './Noticias/Noticias'


const App = () => {
  return (
    <>
      <div>
      <Pelis></Pelis>
      <Series></Series>
      <Noticias></Noticias>
      
      </div>
      
    </>
  )
}


export default App
