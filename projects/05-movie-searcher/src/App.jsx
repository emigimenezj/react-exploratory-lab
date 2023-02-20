import { useEffect, useRef, useState } from 'react';
import { useMovies } from './hooks/useMovies';

import { Movies } from './components/Movies';

import './App.css';

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
      
      

    if (search === '') {
      setError('No se puede buscar una película vacía');
      return;
    }

    if (/^\d+$/.test(search)) {
      setError('No se puede buscar una película con un número');
      return;
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);

  },[search]);

  return { search, updateSearch, error };
}


function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();
  

  
  const handleSubmit = event => {
    event.preventDefault();
    console.log({ search });
  }
  
  const handleChange = event => {
    updateSearch(event.target.value);
  }

  return (
    <div className='page'>
      <header>

        <form className='form' onSubmit={handleSubmit}>

          <input onChange={({target}) => updateSearch(target.value)}
            value={search}
            name='query'
            placeholder='Avengers, Star Wars, The Matrix...'>
          </input>

          <button type='submit'>Buscar</button>

        </form>

        {error ? <p style={{color: 'red'}}>{error}</p> : null}

      </header>
      
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  );
}

export default App
