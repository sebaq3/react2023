import React , { useState,useEffect } from "react";
import Card from "./Card";
import GeneralLayout from "../layouts/GeneralLayout";
import './styles.css'; // Ruta al archivo CSS


/* https://rapidapi.com/SAdrian/api/moviesminidatabase */

export const Pelis = () => {
  
  //QUIERO QUE POR CADA PELICULA GENERE UNA TARJETA
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  
  const [generos,setGeneros] = useState([]);
  const [error,setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const fetchDataGen = async() => {
      setIsLoading(true);
      try {
        const fetchGenres = await fetch ('https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=e978d37cf754ee2def0362a69807b215');
        const data = await fetchGenres.json();              
        const genreMap = {};
        data.genres.map((genre)=> {
          genreMap[genre.id] = genre.name;
          });
          
        setGeneros(genreMap);   
      }catch (error){
        setError('Hubo un error');
      } finally{
        setIsLoading(false);
      }
    };
    

    const fetchPeliculas = async() => {
      setIsLoading(true);
      try {
        const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=e978d37cf754ee2def0362a69807b215&page=${currentPage}`);
        const data = await response.json();
        
        setPeliculas(data.results);
        setTotalPages(data.total_pages);   
      }catch (error){
        setError('Hubo un error');
      } finally{
        setIsLoading(false);
      }
    };

    fetchDataGen();
    fetchPeliculas();      
  }, [currentPage]);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <h1>Peliculas Populares</h1>
      <div className="card-container">
      {peliculas.map((pelicula) => {
        return <Card key={pelicula.id} pelicula={pelicula} genres={generos} />;
        })}
        </div>
        <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  )
}
