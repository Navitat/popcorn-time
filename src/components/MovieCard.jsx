function MovieCard(props) {
  return (
    <div className="card">
      <h3>{props.movieInfo.title}</h3>
      <img src={props.movieInfo.imgURL} alt="movie poster" />
      <p>Year: {props.movieInfo.year}</p>
      <p>Rating: {props.movieInfo.rating}</p>
      <p>
        <button
          onClick={() => {
            props.onDelete(props.movieInfo.id);
          }}
        >
          Delete this Movie
        </button>
      </p>
    </div>
  );
}

export default MovieCard;
