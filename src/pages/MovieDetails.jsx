import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  const { movieId } = useParams(); // returns a string

  const movie = props.moviesArr.find((movieElm) => {
    return movieElm.id === parseInt(movieId);
  });

  return (
    <div>
      <h1>{movie.title}</h1>
      {movie.imgURL && <img src={movie.imgURL} alt="Movie poster" />}
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
      <p>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </p>
    </div>
  );
}

export default MovieDetails;
