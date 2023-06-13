import React from "react";
import { cargarData } from "../hooksGlobales/useFetch";
import { PelisView } from "./PelisView";
import { handleNextPage, handlePrevPage } from "../hooksGlobales/useSetPage";

export const Pelis = () => {
  const urlGeneros = "https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=e978d37cf754ee2def0362a69807b215";
  const urlData = "https://api.themoviedb.org/3/movie/popular?api_key=e978d37cf754ee2def0362a69807b215&page=";
  const {
    dataFetch,
    isLoading,
    generos,
    error,
    totalPages,
    currentPage,
    handleNextPage,
    handlePrevPage,
  } = cargarData(urlGeneros, urlData);
  

  return (
    <PelisView
      peliculas={dataFetch}
      isLoading={isLoading}
      generos={generos}
      totalPages={totalPages}
      currentPage={currentPage}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};