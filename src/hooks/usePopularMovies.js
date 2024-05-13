import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const popularMovies = async()=> {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
            if(!data.ok){
                throw new Error('Failed to fetch popular movie');
            }
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
            //console.log(json.results);
        }
        catch(error){
            console.log(error);
        }
    };

    popularMovies();

  }, []);
}

export default usePopularMovies;
