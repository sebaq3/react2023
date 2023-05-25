import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  borderRadius: "10px",
  width: "300px",
};

const Card = ({ pelicula }) => {
  return (
    <div style={styleCard}>
      <h1>{pelicula.nombre}</h1>
      <h2>{pelicula.fecha}</h2>      
      <img src={pelicula.link_portada}/>
      <p>{pelicula.resumen}</p>
      <h5>{pelicula.directores}</h5>
      <h5>{pelicula.estudio}</h5>
      <h5>{pelicula.genero}</h5>
      <h5>{pelicula.reparto}</h5>
      

/* 
      <button
        onClick={() => {
          deleteUser(user.id);
        }}
      >
        Eliminar
      </button>
*/
    </div>
  );
};

export default Card;