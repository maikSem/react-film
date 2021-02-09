import React from 'react';
import {Field, reduxForm} from 'redux-form';

const SearchForm = (props) => {
  return (
    <form action='#' onSubmit={props.handleSubmit} className='search-form'>
      <div className='search-wrapper search-wrapper__input'>
        <Field component={'input'} type={'text'} name={'searchValue'} className='search-item search-item__input'/>
      </div>

        <button className='button search-button' type={'submit'}>search</button>

    </form>
  )
};

const SearchFormRedux = reduxForm({form: 'searchMovies'})(SearchForm);

export default SearchFormRedux;