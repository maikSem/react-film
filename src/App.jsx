import './App.css';
import Header from './components/Header/Header';
import MovieContainer from './components/Movie/MovieContainer';
import Search from './components/Search/Search';

function App() {

  return (
    <div className="App" >
      <Header text='yoo7' />
      <Search />
      <MovieContainer />
    </div>
  );
}

export default App;