import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  borderRadius: "10px",
  
};

const Card = ({ pelicula }) => {
  return (
    <div style={styleCard}>
      <h1>{pelicula.imdb_id}</h1>
      <h2>{pelicula.title}</h2>      
      {/* <img src={pelicula.Poster} alt={pelicula.Title}/>
      <p>{pelicula.Plot}</p>
      <h5>{pelicula.Director}</h5>
      <h5>{pelicula.Genre}</h5>
      <h5>{pelicula.Actors}</h5> */}
      

/* 
      {/* <button
        onClick={() => {
          favorito(pelicula.nombre);
        }}
      >
        Favorito
      </button> */}
*/
    </div>
  );
};

export default Card;