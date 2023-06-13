

export const handleNextPage = (currentPage, totalPages, setCurrentPage) => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

export const handlePrevPage = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
