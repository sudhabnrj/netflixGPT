import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice'; 
const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch();

    useEffect(()=> {
        const nowPalyingMovie = async () => {
            try{
                const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
                if(!data.ok){
                    throw new Error('Failed to fetch movie data.');
                }
                const json = await data.json();
                console.log('Use Playing Movies Data', json.results);
                dispatch(addNowPlayingMovies(json.results));
            }
            catch(error){
                console.log(error);
            }
        };

        nowPalyingMovie();

    }, []);
}

export default useNowPlayingMovies;