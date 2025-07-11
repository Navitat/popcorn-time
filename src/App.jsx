import { useState } from "react";

import movies from "./data/movies.json";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newList);
  };

  const createMovie = (newMovieDetails) => {
    // create an id for the new movie
    const nextId = Math.max(...moviesToDisplay.map((movie) => movie.id)) + 1;

    const newMovie = {
      ...newMovieDetails,
      id: nextId,
    };

    //prepare array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay];

    //update the list of movies
    setMoviesToDisplay(newList);
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />
          }
        />
        <Route path="/create" element={<AddMovie onCreate={createMovie} />} />
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
