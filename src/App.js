import { useEffect } from "react";
import searchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=3bc9520b";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Title: "Batman Begins",
  Type: "movie",
  Year: "2005",
  imdbID: "tt0372784",
};

const App = () => {
  const searchMovies = async (title) => {
    // search for all movies based on title
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieMix</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="batman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
