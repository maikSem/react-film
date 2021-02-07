import React from 'react';
import {Field, reduxForm} from "redux-form";

const SearchForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} type={'text'} name={'searchValue'}/>
      </div>
      <div>
        <button type={'submit'}>search</button>
      </div>
    </form>
  )
};

const SearchFormRedux = reduxForm({form: 'searchMovies'})(SearchForm);

export default SearchFormRedux;