import React, { useState }  from 'react';
import json from '../assets/noticias.json';
import Card from './Card';



 export const Noticias = () => {

const [noticias, setNoticia] = useState(json.noticias);

  return (
    <div>
      <h1>Noticias</h1>
      {noticias.map((noticia) => {
        return<Card key={ noticia.id } noticia={noticia} />;
        })}
      </div>
      );
    };




            
     






