import React from "react";
import { movies } from "../data";

const renderMovies = () => {
  return movies.map(movie => (
    <div>
      <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ));
};

const Movies = () => {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
