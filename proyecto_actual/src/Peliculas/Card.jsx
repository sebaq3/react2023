import './styles.css'; // Ruta al archivo CSS
import Pelicula from "../Pelicula/Pelicula";
import React from "react";




const Card = ({ pelicula, genres }) => {




  return (
    
    <div className="card-container">
      <div className="card" >
        <h2>{pelicula.original_title}</h2>
                 
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${pelicula.poster_path}`} alt={pelicula.original_title} />
        
        

        {/*<div>
          <p>{pelicula.original_language}</p>
        </div> 
        <p>{pelicula.Plot}</p>
        <h5>{pelicula.Director}</h5>
        <h5>{pelicula.Genre}</h5>
        <h5>{pelicula.Actors}</h5> */}
          
        {/* <button
          onClick={() => {
            favorito(pelicula.nombre);
          }}
        >
          Favorito
        </button> */}

      </div>
    </div>
    
  );
};

export default Card;