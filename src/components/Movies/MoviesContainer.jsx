import React from 'react';
import Movies from "./Movies";
import {connect} from "react-redux";

const MoviesContainer = ({movies}) => {

  return (
    <div>
      <Movies movies={movies}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return (
    {movies: state.movieReducer.movies.Search}
  )
};

export default connect(mapStateToProps)(MoviesContainer);