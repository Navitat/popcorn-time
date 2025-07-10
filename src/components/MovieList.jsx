import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  // const [numOfMovies, setNumOfMovies] = useState(movies.length)

  const deleteMovie = (movieId) => {
    // deleteMovie: will receive the id of a movie to delete & update state with the new list of movies
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newList);
    // setNumOfMovies(newList.length)
  };

  return (
    <div>
      <h1>Number of movies: {moviesToDisplay.length}</h1>

      {moviesToDisplay.map((movie) => {
        return (
          <MovieCard key={movie.id} movieInfo={movie} onDelete={deleteMovie} />
        );
      })}
    </div>
  );
}

export default MovieList;
