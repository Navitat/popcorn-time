import MovieSummary from "../components/MovieSummary";

function MovieList(props) {
  return (
    <div>
      {props.moviesArr.map((movie) => {
        return (
          <MovieSummary
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
