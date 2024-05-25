import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMoreVideos } from '../utils/movieSlice';

const useMoreVideos = (movieID) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        
        const fetchVideos = async () => {
            try{
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS);
                if(!data.ok){
                    throw new Error('Faild to fetch movie data');
                }
                const json = await data.json();
                dispatch(addMoreVideos(json.results));
            }
            catch(error){
                console.error(error);
            }
        };

        fetchVideos();

    }, [movieID, dispatch]);
}

export default useMoreVideos
