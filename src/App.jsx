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

  const handleSubmit = (e) => {
    e.preventDefault();

    //add movie to the list of movies
    const newMovie = {
      title: title,
      year: 1900,
    };

    const newList = [newMovie, ...moviesToDisplay];

    //update the list of movies
    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create a new movie</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="enter the title"
          />
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
