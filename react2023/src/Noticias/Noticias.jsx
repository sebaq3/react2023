import React, { useState }  from 'react';
import json from '../assets/noticias.json';



const Noticias = () => {

const [noticias, setNoticia] = useState(json.noticias);

  return (
    <div>
      <h1>Noticias</h1>
      {noticias.map((noticia) => {
        return(
            <div>
                 <p>{ noticia.id}</p>
                 <p>{ noticia.title}</p>
                 <p>{ noticia.description}</p>
                 <p>{ noticia.date}</p>
            </div>
        );
       
        })}
    </div>
  )
}

export default Noticias;