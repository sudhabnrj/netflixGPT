import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice'; 
const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch();

    const nowPalyingMovie = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json();
            console.log('Use Playing Movies Data', json.results);
            dispatch(addNowPlayingMovies(json.results));
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=> {
        nowPalyingMovie();
    }, []);
}

export default useNowPlayingMovies;