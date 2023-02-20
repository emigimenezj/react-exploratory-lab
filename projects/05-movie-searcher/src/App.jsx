import { Movies } from './components/Movies';
import moviesResponse from './mocks/with-results.json';
import errorResponse from './mocks/no-results.json';
import './App.css'


function App() {
  const movies = moviesResponse.Search;

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }));

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  );
}

export default App
