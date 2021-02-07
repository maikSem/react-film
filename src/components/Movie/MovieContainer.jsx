import React from 'react';
import Movie from './Movie';
import { connect } from "react-redux";
import { searchMoviesRequest, getMoviesTC } from '../../redux/film-reducer';

const MovieContainer = (props) => {

  return (
    <div>
      <Movie {...props} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies}
);

export default connect(mapStateToProps, { searchMoviesRequest, getMoviesTC })(MovieContainer);