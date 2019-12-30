import React from 'react';
import { actors } from '../data';
import Directors from './Directors';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index} className="actor">
          Name: {actor.name}
          <p>Movies</p>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>

      ))}
    </div>
  );
};

export default Actors;
