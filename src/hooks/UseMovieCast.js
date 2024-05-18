import { useEffect } from 'react'
import { API_OPTIONS } from './../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieCast } from '../utils/movieSlice';

const UseMovieCast = (movieID) => {
    const dispatch = useDispatch();
    const fetchMovieCast = async ()=> {
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`, API_OPTIONS);
            if(!data.ok){
                throw new Error('No data available')
            }
            const json = await data.json();
            dispatch(addMovieCast(json));
        }
        catch(error){
            console.error(error);
        }
    };

    useEffect(()=> {
        fetchMovieCast();
    }, []);
};

export default UseMovieCast;
