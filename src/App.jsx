import { useState } from "react";

import movies from "./data/movies.json";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newList);
  };

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //add movie to the list of movies
    const nextId = Math.max(...moviesToDisplay.map((movie) => movie.id)) + 1;
    const newMovie = {
      id: nextId,
      title: title,
      year: year,
    };

    const newList = [newMovie, ...moviesToDisplay];

    //update the list of movies
    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
    setYear("");
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
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

      <Routes>
        <Route
          path="/"
          element={
            <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/movies/:movieId"
          element={<MovieDetails moviesArr={moviesToDisplay} />}
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
