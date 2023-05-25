import React from 'react'

const styleCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid white',
  width: '300px',
};

const Card = ({serie}) => {
  return (
    <div style={styleCard}>
      <h1>{serie.name}</h1>
      <h1>{serie.genre}</h1>
      <h2>{serie.synopsis}</h2>
    </div>
  )
}

export default Card;