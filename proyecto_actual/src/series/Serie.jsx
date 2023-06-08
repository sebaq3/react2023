import React, { useEffect, useState } from 'react';
import Card from './Card';
import GeneralLayout from '../layouts/GeneralLayout';

const Serie = () => {
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=e978d37cf754ee2def0362a69807b215`
        );
        const data = await response.json();
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=e978d37cf754ee2def0362a69807b215&page=${currentPage}`
        );
        const data = await response.json();
        setSeries(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
    fetchSeries();
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

  return (
    <div>
      <GeneralLayout></GeneralLayout>
      <h1>Series</h1>
      {series.map((serie) => (
        <Card key={serie.id} serie={serie} genres={genres} />
      ))}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Serie;
