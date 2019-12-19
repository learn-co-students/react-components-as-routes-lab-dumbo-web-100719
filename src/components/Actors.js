import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { actors.map((actor)=>{
         return <div>
           {
             actor.name
           }, {
             actor.movies
           }
         </div>
       }) }
    </div>
  );
};

export default Actors;
