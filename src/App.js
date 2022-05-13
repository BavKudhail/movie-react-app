import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=3bc9520b";

const App = () => {
  const searchMovies = async (title) => {
    // search for all movies based on title
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return <h1>App</h1>;
};

export default App;
