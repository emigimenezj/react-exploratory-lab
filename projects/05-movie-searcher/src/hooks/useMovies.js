import { useState } from 'react';

import moviesResponse from '../mocks/with-results.json';
import errorResponse from '../mocks/no-results.json';

const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }));

  const getMovies = () => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(json => setResponseMovies(json));
    } else {
      setResponseMovies(errorResponse)
    }
  }
  
  return { movies: mappedMovies, getMovies };
}