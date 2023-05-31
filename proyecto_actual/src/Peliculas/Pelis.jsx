import React , { useState,useEffect } from "react";
import json from "../assets/peliculas.json";
import Card from "./Card";
import GeneralLayout from "../layouts/GeneralLayout";

const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Adventure/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68edf3e069msh81a12aeb71cc7d0p119e75jsn5c87d8dd2aa6',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};
/* https://rapidapi.com/SAdrian/api/moviesminidatabase */

export const Pelis = () => {
  
  //QUIERO QUE POR CADA PELICULA GENERE UNA TARJETA
  const [peliculas, setPelicula] = useState(json.peliculas);
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [error,setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        /* setFilms([data]); */
        setFilms(data.results);
        /*console.log(data.results);*/
        
      }catch (error){
        setError('Hubo un error');
      } finally{
        setIsLoading(false);
      }
    };
    fetchData();
      
  }, []);

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div>
      <GeneralLayout></GeneralLayout>
      <h1>Peliculas</h1>
      {films.map((film) => {
        return <Card key={film.imdb_id} pelicula={film} />;
        })}
    </div>
  )
}
