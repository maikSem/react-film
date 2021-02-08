import React from 'react';
import Movie from "./Movie/Movie";

const Movies = (props) => {

  return (
    <ul>
      {props.movies.map(m => <Movie movie={m} key={m.imdbID} />)}
    </ul>
  )
}

export default Movies;