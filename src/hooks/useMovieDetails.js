import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
const useMovieDetails = (movieID) => {

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(()=> {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, API_OPTIONS);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                const json = await response.json();
                setMovieDetails(json);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();

    }, [movieID, dispatch]);

    return movieDetails;

}
export default useMovieDetails;