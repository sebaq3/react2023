import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid white",
  borderRadius: "10px",
  width: "300px",
};

const Card = ({ pelicula, fecha, imagen }) => {
  return (
    <div style={styleCard}>
      <h1>{pelicula}</h1>
      <h2>{fecha}</h2>      
      <img src={imagen}/>
      

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