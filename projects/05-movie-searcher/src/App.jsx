import { useMovies } from './hooks/useMovies';

import { Movies } from './components/Movies';

import './App.css'



function App() {

  const { movies } = useMovies();

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  );
}

export default App
