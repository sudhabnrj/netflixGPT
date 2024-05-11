import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store)=> store.gptSearch.showGptSearch);

  return (
    <main>
      <Header/>
      {showGptSearch ? <GPTSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }      
    </main>
    
  )
}

export default Browse
