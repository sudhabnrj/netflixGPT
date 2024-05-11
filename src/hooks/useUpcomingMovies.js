import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {

  const dispatch = useDispatch();

    const upcomingMovies = async()=> {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
            //console.log(json.results);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=> {
        upcomingMovies();
    }, []);
}

export default useUpcomingMovies;
