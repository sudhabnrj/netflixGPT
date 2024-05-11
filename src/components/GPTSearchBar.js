import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { toggleDisplayGptSearch } from '../utils/gptSearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
const Search = () => {
  const langKey = useSelector((store)=> store.config.lang);
  
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);

  const handleGptSearch = () => {
    dispatch(toggleDisplayGptSearch());
    setIsToggle(!isToggle);
  }

  return (
    <div className="w-[500px] relative">
      <div className="w-full flex justify-end">
        <input type="text" 
          className={`text-white  outline-none px-4 pr-10 py-2 bg-slate-800 border transition-all
           border-slate-700 ${isToggle ? 'w-full opacity-1 visible': 'w-0 opacity-0 invisible'}`} 
          placeholder={lang[langKey].searchPlaceholder} 
        />
      </div>
      <button className="absolute top-1/2 right-2 -translate-y-1/2" onClick={handleGptSearch}>                
        {
          isToggle ? <CloseOutlinedIcon className="text-white"/> : 
          <SearchOutlinedIcon className="text-white" />
        }        
      </button>
    </div>
  )
}

export default Search;
