import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
const useMovieDetails = (movieID) => {

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(()=> {
        fetchMovie();
    }, [movieID]);

    const fetchMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        setMovieDetails(json);
    };

    return movieDetails;

}
export default useMovieDetails;