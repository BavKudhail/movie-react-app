const MovieCard = () => {
  return (
    <div className="movie">
      <div>
        <p>YEAR</p>
      </div>
      <div>
        {/* <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie1.Title}
        /> */}
      </div>
      <div>
        <span>TYPE</span>
        <h3>TITLE</h3>
      </div>
    </div>
  );
};

export default MovieCard;
