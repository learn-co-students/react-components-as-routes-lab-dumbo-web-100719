import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map((movie, index) =>
    <div key={index}>
      <h3><strong>{movie.title}</strong></h3>
      <p><strong>Runtime:</strong> {movie.time} minutes</p>
      <p><strong>Genres:</strong></p>
        <ul>
          {movie.genres.map((genre, index) => 
            <li key={index}>{genre}</li>
            )}
        </ul>
    </div>
  )

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
};

export default Movies;