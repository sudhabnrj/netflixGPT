import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieCast } from '../utils/movieSlice';
import { addTvShowCast } from '../utils/tvshowSlice';

const UseCast = (movieID, tvSeriesID) => {
    const dispatch = useDispatch();   

    useEffect(()=> {

        const fetchMovieCast = async ()=> {
            try{

                let url;
                if(tvSeriesID){
                    url = `https://api.themoviedb.org/3/tv/${tvSeriesID}/credits`;
                }else if(movieID){
                    url = `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`;
                }

                if(url){
                    const data = await fetch(url, API_OPTIONS);
                    if(!data.ok){
                        throw new Error('No data available')
                    }
                    const json = await data.json();
                    if(tvSeriesID){
                        dispatch(addTvShowCast(json));
                        console.log('TvSeries', json);
                    }else if(movieID){
                        dispatch(addMovieCast(json));
                        console.log('MovieCast', json);
                    }
                    
                    //console.log(json);
                }                
                
            }
            catch(error){
                console.error(error);
            }
        };
        fetchMovieCast();
    }, [movieID, tvSeriesID, dispatch]);
};

export default UseCast;
