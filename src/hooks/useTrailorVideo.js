import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailorVideo } from '../utils/movieSlice';

const useTrailorVideo = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailor = async () => {
      try{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        console.log('Total Array Result:', json.results);
        const filterVideo = json.results.filter((items)=> items.type === "Trailer");
        //const trailorVideo = filterVideo.length ? filterVideo[1] : json.results[1];
        console.log('After Filter Array:', filterVideo);
        dispatch(addTrailorVideo(filterVideo[0]));
        
      }
      catch(error){
        console.error('Error fetching movie trailer:', error);
      } 
    };
  
    useEffect(()=> {
        movieTrailor();
    }, []);
}

export default useTrailorVideo;
