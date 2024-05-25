import React, {useRef } from 'react';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {  useSelector, useDispatch } from 'react-redux';
import lang from '../utils/languageConstants';
import {addGptMovieResult} from '../utils/gptSearchSlice';
import { API_OPTIONS } from '../utils/constants';

const Search = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store)=> store.config.lang);
  const searchText = useRef(null);

  const handleGTPSearch = async () => {
    const search_Query = searchText.current.value.trim();
    if(search_Query === ''){
      dispatch(addGptMovieResult(null));
    }else{
      try{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ search_Query +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        if(!data.ok){
          throw new Error('Faield to fetch Movie Data');
        }
        const json = await data.json();
        dispatch(addGptMovieResult(json.results));
      }
      catch(error){
        console.error('Error fetching Movie Data', error);
      }
    }
  }

  return (
    <div className="2xl:pt-[5%] sm:pt-[15%] pt-[30%] flex justify-center">
      <form onSubmit={(e) => e.preventDefault() } className=" bg-black bg-opacity-80 w-[92%] sm:w-[70%] 2xl:w-1/3 grid grid-cols-12 p-4 ">
        <input type="text" 
          ref={searchText}
          className="text-black  outline-none px-4 pr-10 py-3 bg-white transition-all col-span-8 lg:col-span-10" 
          placeholder={lang[langKey].searchPlaceholder} 
        />
        <button  className="col-span-4 lg:col-span-2 bg-red-700 py-1 px-2 text-white text-xl font-medium" onClick={handleGTPSearch}>{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default Search;
