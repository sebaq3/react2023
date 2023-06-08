import './App.css'
import { Pelis } from './Peliculas/Pelis'
import { Noticias } from './Noticias/Noticias'
import Serie from './Series/Serie'
import Home from './Home/Home'




const App = () => {
  return (

      <div>
        <Home />
        <Serie></Serie>
        <Noticias></Noticias>      
        <Pelis></Pelis>  
      </div>      

  )
}


export default App
