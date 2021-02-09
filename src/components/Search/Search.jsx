import React from 'react';
import SearchFormRedux from './SearchForm';
import {getMoviesSearchTC} from '../../redux/film-reducer';
import {connect} from "react-redux";

const Search = (props) => {

  const onSubmit = (formData) => {
    props.getMoviesTC(formData.searchValue);
    formData.searchValue = '';
  };

  return (
    <div className='search'>
      <SearchFormRedux onSubmit={onSubmit}/>
    </div>
  )
};


export default connect(null, {getMoviesTC: getMoviesSearchTC})(Search);