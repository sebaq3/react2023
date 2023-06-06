import React from 'react'

const styleCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid white',
  width: '300px',
};

const Card = ({ serie, genres }) => {
  const { name, overview, genre_ids } = serie;
  const showGenres = genre_ids.map((genreId) => genres[genreId]);

  return (
    <div>
      <h2>{name}</h2>
      <p>{overview}</p>
      <p>Genres: {showGenres.join(', ')}</p>
    </div>
  );
};

export default Card;
