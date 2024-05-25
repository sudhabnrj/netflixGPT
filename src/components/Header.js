import React, {useEffect, useState, useRef} from 'react';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';
// import {changeLanguage} from '../utils/configSlice';
import { toggleDisplayGptSearch, clearMovieResults, setHomePage, } from '../utils/gptSearchSlice';


const Header = ({className}) => {
  
  const [sticky, setSticky] = useState({usState: false, offset: 0});
  const headerRef = useRef(null);

  const navigate = useNavigate();

  const user = useSelector((store)=> store.user);
  const showGptSearch = useSelector((store)=> store.gptSearch.showGptSearch);
  //const movieResult = useSelector((store)=> store.movies.movieInfo);

  const dispatch = useDispatch();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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

//   const handleLanguageChange = (e)=>{
//     dispatch(changeLanguage(e.target.value));
//   };

  const handleSearchToggle = () => {
    if(showGptSearch === false){
      dispatch(clearMovieResults());
      navigate('/');
    }
    dispatch(toggleDisplayGptSearch());
    //setIsToggle(!isToggle);
  };

  const handleScroll = (elTopOffset, elHeight) => {
    if(window.pageYOffset > (elTopOffset + elHeight)){
      setSticky({isSticky: true, offset: elHeight});
    }else{
      setSticky({isSticky: false, offset: 0});
    }
  };

  useEffect(()=> {
    var header = headerRef.current.getBoundingClientRect();
    const headerScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', headerScrollEvent);

    return()=> {
      window.removeEventListener('scroll', headerScrollEvent);
    };
  }, []);

  const handleNavMenu = ()=> {
    setOpenMobileMenu(!openMobileMenu);
  }

    return(
    <>
    {user ? (
      <header className={`sign--in absolute top-0 left-0 right-0 
        z-30 ${sticky.isSticky ? "sticky py-2" : 'py-3'} ${openMobileMenu ? 'opened' : '' }`} ref={headerRef}>
        <div className="container mx-auto px-0 lg:px-0">
          <div className="flex justify-between items-center lg:border-none border-4 border-red-600 rounded-[50px] lg:rounded-none py-3 lg-py-0 px-5 lg:px-0 w-[95%] sm:w-full mx-auto">
            <Link to="/browse" className='w-[150px] lg:w-2/12 logo' onClick={
              () => {dispatch(setHomePage(false));}
            }>
              <img src={LOGO} alt="Logo" />
            </Link>
            
              <div className="flex justify-end items-center w-10/12">
                <div className={`fixed lg:relative top-0 lg:left-0 ${!openMobileMenu ? '-left-[270px]' :'left-0'} lg:p-0 p-4 lg:bg-transparent bg-black lg:h-auto h-screen lg:w-11/12 w-[220px]  bottom-0 lg:overflow-hidden overflow-auto flex justify-end lg:flex-row flex-col lg:gap-0 gap-y-7 transition-all duration-500 ease-in-out z-50`}>

                  <Link className="text-white text-xl mr-10" to="/movie">Movies</Link>
                  <Link className="text-white text-xl mr-10" to="/tv">TV Shows</Link>
                  <button onClick={handleSearchToggle} className="bg-red-700 rounded-sm py-2 px-4 text-white lg:ml-2 font-semibold">
                      {showGptSearch ? 'Home' : 'GPT Search'}
                  </button>
                </div>
                <div className="lg:w-1/12 w-auto flex">
                  <div className="dropdown relative inline-block text-left lg:ml-4">
                    <p className="flex justify-start items-center">
                      <img className="rounded-full w-8 h-8" src={user?.photoURL} alt="user" />
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
                  <button className="humberger-menu flex items-center relative lg:hidden ml-4" onClick={handleNavMenu}>
                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                    <span className="line-icon bg-slate-700 dark:bg-white"></span>
                  </button> 
                </div>           
              </div>
              
          </div>
        </div>
      </header>) : (
      <header className={`absolute py-5 top-0 left-0 right-0 z-30 ${sticky.isSticky ? "sticky" : ''}`} ref={headerRef}>
        <div className="container mx-auto px-6 lg:px-0">
          <div className="flex justify-center items-center">
            <Link to="/browse" className='w-[150px] lg:w-2/12 logo flex justify-center' onClick={
              () => {dispatch(setHomePage(false));}
            }>
              <img src={LOGO} alt="Logo" />
            </Link>              
          </div>
        </div>
      </header>
      )
    }
    </>
    );
};

export default Header;