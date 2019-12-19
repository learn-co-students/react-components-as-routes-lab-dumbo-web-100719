import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        
        <h1>Movies Page</h1>
       { movies.map((movie)=>{
         return <div><h1>
           Title:
           {
             movie.title
           }, Time: {
            movie.time
           }, Genres: {
            movie.genres
           }, Metascore: {
            movie.metascore
           }
           </h1></div>
       }) }
    </div>
  );
};

// {
//   title: 'Doctor Strange',
//   time: 115,
//   genres: ['Action', 'Adventure', 'Fantasy'],
//   metascore: 74
// }
export default Movies;
