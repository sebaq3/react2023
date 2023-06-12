import React from 'react'
import '../Peliculas/styles.css'

const styleCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid white',
  width: '300px',
};

const Card = ({ serie, genres }) => {
  const { name, overview, genre_ids, poster_path } = serie;
  const showGenres = genre_ids.map((genreId) => genres[genreId]);

  return (
    <div className="card-container">
      <div className="card" >
      <h2>{name}</h2>
      
      <p>Genres: {showGenres.join(', ')}</p>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={name} />
    </div>
    </div>
  );
};

export default Card;
