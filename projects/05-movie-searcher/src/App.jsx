import moviesResponse from './mocks/with-results.json';
import errorResponse from './mocks/no-results.json';
import './App.css'

function App() {

  const movies = moviesResponse.Search;
  const hasMovies = movies?.length > 0;

  console.log(movies, hasMovies);

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      
      <main>
        {hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
                  </li>
                ))
              }
            </ul>
          ) : (
            <p>No se encontraron películas para esta búsqueda.</p>
          )
        }
      </main>
    </div>
  );
}

export default App
