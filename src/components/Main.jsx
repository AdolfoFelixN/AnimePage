import { useState, useEffect } from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col justify-start items-center grow h-96 w-52 mx-4 mt-2">
      <div className="h-80 w-full flex flex-col items-center mb-2 cursor-pointer">
        <img
          src={data.images.jpg.image_url}
          alt={data.title}
          className="h-full w-full rounded-lg shadow-slate-800 shadow-md transition-opacity duration-300 ease-in-out hover:opacity-50"
        />
      </div>
      <h3 className="text-xl text-white">
        {data.title.split(" ", 3).join(" ")}
      </h3>
    </div>
  );
};

const CardRow = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.mal_id} data={item} />
      ))}
    </>
  );
};

export const Main = () => {
  const [anime, setAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw&page=${page}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
  }, [searchAnime, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchAnime(e.target.search.value);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNextPage = () => {
    if (page < 1000){
        setPage(page + 1);
    }    
  }

  return (
    <main className="bg-slate-950 flex justify-center flex-col items-center">
      <div>
        <form action="" onSubmit={handleSearch} className="flex flex-row items-center mt-6">
          <input
            type="text"
            className="ml-8 mr-2 w-60 text-slate-950 bg-blue-700 focus:ring-2 font-medium rounded-lg text-lg px-2 py-2 focus:outline-none"
            name="search"
            id=""
          />

          <button className="text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </div>
      <div className="animeSection flex flex-wrap mx-28 my-5">
        <CardRow title="Top Anime" data={anime} />
      </div>
      <div className="flex mb-6 items-center">
        <button className="mr-2" onClick={handlePreviousPage}>
            <i className="bi bi-arrow-left-square-fill text-blue-700 text-4xl"></i>
        </button>
        <p className="mx-2 text-white text-3xl">{page}</p>
        <button className="ml-2" onClick={handleNextPage}>
            <i className="bi bi-arrow-right-square-fill text-blue-700 text-4xl"></i>
        </button>
      </div>
    </main>
  );
};
