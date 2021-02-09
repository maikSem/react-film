import React from 'react';
import {NavLink} from "react-router-dom";

const Movie = ({movie}) => {

  return (
    <li className='movie-item'>
      <div>
        <NavLink to={'/movie/' + movie.imdbID}>
          <h3 className='movie-title'>{movie.Title}</h3>
          <div>
            <img src={movie.Poster} alt=""/>
          </div>
          <div>
            description
          </div>
        </NavLink>
      </div>
    </li>
  )
};

export default Movie;