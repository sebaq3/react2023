import { useState } from 'react'
import './App.css'
import { Pelis } from './Peliculas/Pelis'
import { Noticias } from "./Noticias/Noticias";
import Serie from './Series/Serie'


const App = () => {
  return (
    <>
      <div>
        
      <Serie></Serie>
      <Pelis></Pelis> 
      <Noticias></Noticias>
      
      
      
      </div>
      
    </>
  )
}


export default App
