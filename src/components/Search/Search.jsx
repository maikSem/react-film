import React from 'react';
import SearchFormRedux from './SearchForm';
import {getMoviesTC} from '../../redux/film-reducer';
import {connect} from "react-redux";

const Search = (props) => {

  const onSubmit = (formData) => {
    props.getMoviesTC(formData.searchValue);
    formData.searchValue = '';
  };

  return (
    <div>
      <SearchFormRedux onSubmit={onSubmit}/>
    </div>
  )
};


export default connect(null, {getMoviesTC})(Search);