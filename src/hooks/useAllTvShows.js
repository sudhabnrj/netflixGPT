import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addAllListOfTvShows } from '../utils/tvshowSlice';

const useAllTvShows = () => {

    const dispatch = useDispatch();

    useEffect(()=> {

        const fetchTVShow = async () => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day`, API_OPTIONS);
                if(!response.ok){
                    throw new Error('Faild to fetch movie data');
                }
                const json = await response.json();
                dispatch(addAllListOfTvShows(json));
                //console.log('All Tv :', json);
            }
            catch(error){
                console.error(error);
            }
        };
    
        fetchTVShow();
    
    }, [dispatch]);
}

export default useAllTvShows;
