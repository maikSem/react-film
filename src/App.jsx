import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MoviesContainer from './components/Movies/MoviesContainer';
import {Route} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";

const MovieProfileContainer = React.lazy(() => import('./components/MovieProfile/MovieProfileContainer'));

function App() {

  return (
    <div className='app'>
      <div className='app-wrapper'>
        <Header text='CINEMA ROOM'/>
        <div>
          <Route exact  path='/' render={() => <MoviesContainer/>} />
          <Route path='/movie/:imdbID?' render={withSuspense(MovieProfileContainer)}/>
        </div>
      </div>
    </div>
  );
};

export default App;