import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3bc9520b";

const App = () => {
  // movies hook
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    // search for all movies based on title
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // pass movie search data into setMovies function
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("marvel");
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
      {movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <div className="container">
              <MovieCard movie1={movie} />
            </div>
          );
        })
      ) : (
        <div className="no-movies">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
