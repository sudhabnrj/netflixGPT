import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addMovieInfo} from '../utils/movieSlice'

const useMovieDetails = (movieID) => {

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchMovieInfo = async ()=> {
            try{
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, API_OPTIONS);
                const json = await data.json();
                dispatch(addMovieInfo(json));
            }
            catch(error){
                console.error('Error fetching movie details:', error);
            }        
    
        };
        fetchMovieInfo();
    }, [movieID, dispatch]);

}
export default useMovieDetails;