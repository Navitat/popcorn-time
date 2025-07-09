import { useState } from "react";
import movies from "../data/movies.json";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  // const [numOfMovies, setNumOfMovies] = useState(movies.length)

  const deleteMovie = (movieId) => {
    // deleteMovie: will receive the id of a movie to delete & update state with the new list of movies
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
      // if (movie.id !== movieId) {
      //   return true;
      // } else {
      //   return false;
      // }
      // return movies.id !== movieId ? true : false
    });
    setMoviesToDisplay(newList);
    // setNumOfMovies(newList.length)
  };

  return (
    <div>
      <h1>Number of movies: {moviesToDisplay.length}</h1>

      {moviesToDisplay.map((movie) => {
        return (
          <div key={movie.id} className="card">
            <h3>{movie.title}</h3>
            <img src={movie.imgURL} alt="movie poster" />
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>
              <button
                onClick={() => {
                  deleteMovie(movie.id);
                }}
              >
                Delete this Movie
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
