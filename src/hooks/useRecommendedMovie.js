import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addRecomendedVideos } from '../utils/movieSlice';

const useRecommendedMovie = (movieID) => {

  const dispatch = useDispatch();

  useEffect(()=> {

    const fetchRecommendedMovie = async () => {
      try{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&page=1`, API_OPTIONS);
        if(!data.ok){
            throw new Error('No data available');
        }
        const json = await data.json();
        dispatch(addRecomendedVideos(json.results));
      }
      catch(error){
        console.error(error);
      }
    };

    fetchRecommendedMovie();

  }, [movieID, dispatch]);
}

export default useRecommendedMovie