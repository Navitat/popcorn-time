import { Link } from "react-router-dom";

function MovieSummary(props) {
  return (
    <div key={props.movieInfo.id} className="card">
      <h3>{props.movieInfo.title}</h3>
      {/* <img src={props.movieInfo.imgURL} alt="movie poster" /> */}
      {props.movieInfo.imgURL && (
        <img src={props.movieInfo.imgURL} alt="Movie poster" />
      )}
      <p>Year: {props.movieInfo.year}</p>
      <p>
        <button
          onClick={() => {
            props.onDelete(props.movieInfo.id);
          }}
        >
          Delete this Movie
        </button>
        <Link to={`/movies/${props.movieInfo.id}`}>
          <button className="btn btn-primary">More details</button>
        </Link>
      </p>
    </div>
  );
}

export default MovieSummary;
