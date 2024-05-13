export const Controls = ({ page, setPage }) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < 1000) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex mb-6 items-center">
      <button className="mr-2" onClick={handlePreviousPage}>
        <i className="bi bi-arrow-left-square-fill text-blue-700 text-4xl"></i>
      </button>
      <p className="mx-2 text-white text-3xl">{page}</p>
      <button className="ml-2" onClick={handleNextPage}>
        <i className="bi bi-arrow-right-square-fill text-blue-700 text-4xl"></i>
      </button>
    </div>
  );
};
