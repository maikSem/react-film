import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MoviesContainer from "./components/Movies/MoviesContainer";

function App() {

  return (
    <div className="App">
      <Header text='yoo7'/>
      <Search/>
      <MoviesContainer/>
    </div>
  );
}

export default App;