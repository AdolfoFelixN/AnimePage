import { useState, useEffect } from "react";
import { CardRow } from "./Card"
import { Controls } from "./Controls";

export const Main = () => {
  const [anime, setAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw&page=${page}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
      setLoading(false);
  }, [searchAnime, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchAnime(e.target.search.value);
    setPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-yellow-400">
        <h1 className="text-3xl text-black">Loading content...</h1>
      </div>
    );
  }

  return (
    <main className="bg-slate-950 flex justify-center flex-col items-center px-20">
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
      <div className="animeSection flex flex-wrap mx-0 my-5 justify-center items-center">
        <CardRow title="Top Anime" data={anime} />
      </div>
      <Controls page={page} setPage={setPage} />      
    </main>
  );
};
