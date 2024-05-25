import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailorVideo } from '../utils/movieSlice';
import {addTvTrailorVideo} from '../utils/tvshowSlice';

const useTrailorVideo = (movieID, tvSeriesID) => {
    const dispatch = useDispatch();

    useEffect(() => {
      const movieTrailor = async () => {
        try{

          let url;
          if(tvSeriesID){
            url = `https://api.themoviedb.org/3/tv/${tvSeriesID}/videos?language=en-US`;
          }else if(movieID){
            url = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`
          }

          if(url){
            const data = await fetch(url, API_OPTIONS);
            if(!data.ok){
              throw new Error('Faild to fetch movie data');
            }
            const json = await data.json();
            //console.log('Total Array Result:', json.results);
            const filterVideo = json.results.filter((items)=> items.type === "Trailer");
            const trailer = filterVideo.length ? filterVideo[0] : null;
            //const trailorVideo = filterVideo.length? filterVideo[1] : json.results[1];
            //console.log('After Filter Array:', filterVideo);
            if (movieID && trailer) {
              dispatch(addTrailorVideo(trailer));
            } else if (tvSeriesID && trailer) {
              dispatch(addTvTrailorVideo(trailer));
            }
          }        
        }
        catch(error){
          console.error('Error fetching movie trailer:', error);
        } 
      };

      movieTrailor();

    }, [dispatch, movieID, tvSeriesID]);
}

export default useTrailorVideo;
