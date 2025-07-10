import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      {props.moviesArr.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieInfo={movie}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
