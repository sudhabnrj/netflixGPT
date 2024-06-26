import React, {useEffect} from 'react';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';
// import GPTSearchBar from './GPTSearchBar';
import { SUPPORTED_LANGUAGE } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { toggleDisplayGptSearch, clearMovieResults,setHomePage } from '../utils/gptSearchSlice';


const Header = () => {
  

  const navigate = useNavigate();

  const user = useSelector((store)=> store.user);
  const showGptSearch = useSelector((store)=> store.gptSearch.showGptSearch);
  //const movieResult = useSelector((store)=> store.movies.movieInfo);

  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        //console.log(addUser({uid: uid, email: email}));
        if(window.location.pathname === '/'){
          navigate('/browse');
          console.log(window.location.pathname);
        }
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearchToggle = () => {
    if(showGptSearch === false){
      dispatch(clearMovieResults());
    }
    dispatch(toggleDisplayGptSearch());
    //setIsToggle(!isToggle);
  };

    return(
    <header className="absolute py-2 top-0 left-0 right-0 z-30">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex justify-between items-center">
          <Link to="/browse" className='w-[150px] lg:w-2/12 logo' onClick={
            () => {dispatch(setHomePage(false));}
          }>
            <img src={LOGO} alt="Logo" />
          </Link>
          {user &&
            <div className="flex justify-end items-center w-10/12 relative">
              {showGptSearch && (<select 
                  onChange={handleLanguageChange}
                  className="bg-slate-900 text-white rounded-sm py-1 px-2 border border-slate-800 outline-none ml-2">
                  {SUPPORTED_LANGUAGE.map((lang) => {
                    return (
                      <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                    )
                  })}
                </select>)}
                <button onClick={handleSearchToggle} className="bg-red-700 rounded-sm py-2 px-4 text-white ml-2 font-semibold">
                  {!showGptSearch ? 'GPT Search' : 'Home'}
                </button>
              <div className="dropdown relative inline-block text-left ml-4">
                <p className="flex justify-start items-center">
                  <img className="rounded-md w-8 h-8" src={user?.photoURL} alt="user" />
                  <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </p>
                <div className="dropdown-menu hidden absolute right-0 z-10 top-[34px] bg-black border border-slate-800 rounded-md shadow-lg w-[218px]">
                    <ul>
                      <li className="cursor-pointer border-b border-slate-800">
                        <p className="flex justify-start w-full items-center text-white px-3 py-2">
                          <img className="rounded-md w-8 h-8" src={user?.photoURL} alt="user" />
                          <span className="ml-2 capitalize">{user?.displayName}</span>
                        </p>
                        
                      </li>
                      <li className="cursor-pointer border-b border-slate-800">
                        <p className="flex justify-start w-full items-center text-white px-3 py-2">Profile Setting</p>
                      </li>
                      <li className="cursor-pointer">
                        <p className="flex justify-start w-full items-center text-white px-3 py-2" onClick={handleSignOut}>Sign out</p>
                      </li>
                    </ul>
                </div>
              </div>
              
            </div>
          }
        </div>
      </div>
    </header>
    );
};

export default Header;