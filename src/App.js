import { useEffect } from "react";
import searchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=3bc9520b";

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
      <div className="container"></div>
    </div>
  );
};

export default App;
