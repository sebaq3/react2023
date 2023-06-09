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


const Card = ({ upcoming }) => {
  return (
    <div style={styleCard}>
      <h2>{upcoming.title}</h2>
      <p>{upcoming.overview}</p>
      <p>{upcoming.release_date}</p>
      <button>watch trailer</button>
    </div>

  );
};

export default Card;






