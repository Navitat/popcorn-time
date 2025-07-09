import movies from "../data/movies.json";

function MovieList() {
  return (
    <div>
      <h1>List of movies:</h1>

      {movies.map((movie) => {
        return (
          <div key={movie.id} className="card">
            <h3>{movie.title}</h3>
            <img src={movie.imgURL} alt="movie poster" />
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
