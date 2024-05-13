import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {

  const dispatch = useDispatch();

    useEffect(() => {
        const upcomingMovies = async()=> {
            try{
                const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
                if(!data.ok){
                    throw new Error ('Failed to fetch movie data.');
                }
                const json = await data.json();
                dispatch(addUpcomingMovies(json.results));
                //console.log(json.results);
            }
            catch(error){
                console.log(error);
            }
        };

        upcomingMovies();

    }, []);
}

export default useUpcomingMovies;
