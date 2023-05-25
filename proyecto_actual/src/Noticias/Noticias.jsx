import React, { useState }  from 'react';
import json from '../assets/noticias.json';
import Card from './Card';
import GeneralLayout from "../layouts/GeneralLayout";



 export const Noticias = () => {

const [noticias, setNoticia] = useState(json.noticias);

  return (
    <div>
      <GeneralLayout></GeneralLayout>    
      <h1>Noticias</h1>
      {noticias.map((noticia) => {
        return<Card key={ noticia.id } noticia={noticia} />;
        })}
      </div>
      );
    };




            
     






