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

const Card = ({ noticia }) => {
  return (
    <div style={styleCard}>
      <h1>{noticia.id}</h1>
      <h2>{noticia.title}</h2>      
      <p>{noticia.description}</p>
      <h5>{noticia.date}</h5>
      


      <button onClick={() => {deleteUser(user.id);}} >
        Eliminar
      </button>

    </div>
  );
};

export default Card;






