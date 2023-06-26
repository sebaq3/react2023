import React, { useEffect, useState } from 'react';
import Card from './Card';
import GeneralLayout from '../layouts/GeneralLayout';
import useSeries from '../hooks/useSeries';

const Serie = () => {

  const {series, genres, currentPage, totalPages, handlePrevPage, handleNextPage} = useSeries()


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
