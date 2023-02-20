import { useRef, useState } from 'react';

import { searchMovies } from '../services/movies.js'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = async () => {

    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);

      previousSearch.current = search;

      const moviesResponse = await searchMovies({ search });
      setMovies(moviesResponse);

    } catch(error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    
  }
  
  return { movies, getMovies, loading };
}