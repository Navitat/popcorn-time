import { useState } from "react";

import movies from "./data/movies.json";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";
import Footer from "./components/Footer";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
