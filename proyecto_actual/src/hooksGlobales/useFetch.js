import { useState, useEffect } from "react";
import { handleNextPage, handlePrevPage } from "./useSetPage";

export const cargarData = (urlGeneros, urlData) => {
    
  const [dataFetch, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [generos, setGeneros] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    const fetchDataGen = async () => {
      setIsLoading(true);
      try {
        const fetchGenres = await fetch(
            `${urlGeneros}`
        );
        const data = await fetchGenres.json();
        const genreMap = {};
        data.genres.map((genre) => {
          genreMap[genre.id] = genre.name;
        });

        setGeneros(genreMap);
      } catch (error) {
        setError("Hubo un error");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {        
        const url = urlData+currentPage;       
        
        const response = await fetch(`${url}`);
        const data = await response.json();

        setData(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Hubo un error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataGen();
    fetchData();
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

  return {
    dataFetch,
    isLoading,
    generos,
    error,
    totalPages,
    currentPage,
    handleNextPage,
    handlePrevPage,
  };
};