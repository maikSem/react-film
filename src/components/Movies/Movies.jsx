import React from 'react';
import Movie from "./Movie/Movie";

const Movies = (props) => {

  let moviesElement = props.movies.map(el => <Movie title={el.Title}/>)
  return (
    <div>
      {moviesElement}
    </div>
  )
}

export default Movies;