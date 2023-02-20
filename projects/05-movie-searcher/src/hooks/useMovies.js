import { useState } from 'react';

import { searchMovies } from '../services/movies.js'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesResponse = await searchMovies({ search });
    setMovies(moviesResponse);
  }
  
  return { movies, getMovies };
}