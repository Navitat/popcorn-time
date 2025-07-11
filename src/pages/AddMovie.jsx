import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //prepare object with details of the new movie
    const newMovie = {
      title: title,
      year: year,
    };

    //invoke function in the parent component
    props.onCreate(newMovie);

    // clear form
    setTitle("");
    setYear("");

    //redirect to home
    navigate("/");
  };

  return (
    <section className="AddMovie card">
      <h2>Create a new movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="enter the title"
            required
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            min={1950}
            max={2025}
            name="year"
            placeholder="enter the year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            required
          />
        </label>
        <button>Create</button>
      </form>
    </section>
  );
}

export default AddMovie;
