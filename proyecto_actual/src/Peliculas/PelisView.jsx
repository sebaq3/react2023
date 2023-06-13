import React from "react";
import Card from "./Card";
import GeneralLayout from "../layouts/GeneralLayout";
import "./styles.css";

export const PelisView = ({
  peliculas,
  isLoading,
  generos,
  totalPages,
  currentPage,
  handleNextPage,
  handlePrevPage,
}) => {
  if (isLoading) {
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
          return (
            <Card key={pelicula.id} pelicula={pelicula} genres={generos} />
          );
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
  );
};