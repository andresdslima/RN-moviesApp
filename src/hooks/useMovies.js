import { useEffect, useState } from 'react';
import { moviesDB } from '../services/moviesDB';

export const useMovies = () => {
  const [moviesToday, setMoviesToday] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const resp = await moviesDB.get('/now_playing');
      setMoviesToday(resp.data.results);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesToday,
    isLoading,
  };
};
