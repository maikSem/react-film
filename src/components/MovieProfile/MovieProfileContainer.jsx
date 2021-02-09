import React from 'react';
import MovieProfile from './MovieProfile';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from "react-redux";
import {getMovieId} from "../../redux/film-reducer";

class MovieProfileContainer extends React.Component {

  componentDidMount() {
    let movieId = this.props.match.params.imdbID;

    this.props.getMovieId(movieId);
  }

  render() {

    return (
      <MovieProfile movie={this.props.currentMovie}/>
    )

  }
};

let mapStateToProps = (state) => ({
  currentMovie: state.movieReducer.currentMovie
});

export default compose(
  connect(mapStateToProps, {getMovieId}),
  withRouter
)(MovieProfileContainer);
