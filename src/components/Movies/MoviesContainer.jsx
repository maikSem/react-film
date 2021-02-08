import React from 'react';
import Movies from "./Movies";
import { connect } from "react-redux";
import { getMoviesStartTC } from '../../redux/film-reducer';

class MoviesContainer extends React.Component {

  componentDidMount() {
    this.props.getMoviesStartTC();
  }

  render() {
    return (
      <div>
        <Movies {...this.props} />
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies
  }
};

export default connect(mapStateToProps, { getMoviesStartTC })(MoviesContainer);