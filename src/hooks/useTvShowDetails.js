import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTvShowInfo} from '../utils/tvshowSlice';

const useTvShowDetails = (tvSeriesID) => {

    const dispatch = useDispatch();

    //console.log('tv id: ' + tvSeriesID);

    useEffect(()=> {
        const fetchTvShowInfo = async ()=> {
            try{
                const data = await fetch(`https://api.themoviedb.org/3/tv/${tvSeriesID}`, API_OPTIONS);
                if(!data.ok){
                    throw new Error('Something went wrong');
                }
                const json = await data.json();
                dispatch(addTvShowInfo(json));
                //console.log('All Tv', json);
            }
            catch(error){
                console.error('Error fetching movie details:', error);
            }        
    
        };
        fetchTvShowInfo();
    }, [tvSeriesID, dispatch]);

}
export default useTvShowDetails;