import React from 'react';

const Movie = ({ movie }) => {

  return (
    <div>
      <h3>{movie.Title}</h3>
      <div>
        <img src={movie.Poster} alt="" />
      </div>
      <div>
        description
      </div>
    </div>
  )
};

export default Movie;