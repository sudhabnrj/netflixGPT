import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import addGptMovieResult from '../utils/gptSearchSlice';

const useSearchMovie = (search_Query) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const searchMovieResult = async () => {
            try{
                const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ search_Query +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
            
                if(!data.ok){
                    throw new Error('Faild to fetch movie data');
                }
                const json = await data.json();
                dispatch(addGptMovieResult(json.results));
            }
            catch(error){
                console.error('Error fetching movie trailer:', error);
            }
        };

        searchMovieResult();

    }, [search_Query, dispatch]);
}

export default useSearchMovie;
