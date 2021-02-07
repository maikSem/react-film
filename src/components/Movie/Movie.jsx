import React from 'react';

const Movie = (props) => {

  return (
    <div>
      <img src={props.movies.Poster} alt=""/>
      <button onClick={() => {props.getMoviesTC()}}>CLICK</button>
    </div>
  )
}

export default Movie;