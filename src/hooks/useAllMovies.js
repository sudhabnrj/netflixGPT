import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addAllMovies } from '../utils/movieSlice';

const useAllMovies = () => {
    const dispatch = useDispatch();

  useEffect(()=> {

    const fetchMovies = async () => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day`, API_OPTIONS);
            if(!response.ok){
                throw new Error('Faild to fetch movie data');
            }
            const json = await response.json();
            dispatch(addAllMovies(json));
            //console.log(json);
        }
        catch(error){
            console.error(error);
        }
    };

    fetchMovies();

  }, [dispatch]);
}

export default useAllMovies;
