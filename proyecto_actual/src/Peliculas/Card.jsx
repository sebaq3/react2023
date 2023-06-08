import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  borderRadius: "10px",
  
};

const Card = ({ pelicula, genres }) => {
  return (
    <div style={styleCard}>
      <h1>{pelicula.original_title}</h1>
      <div>
        <p>{pelicula.original_language}</p>
      </div>           
       {/*<img src={pelicula.Poster} alt={pelicula.Title}/>
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
  );
};

export default Card;