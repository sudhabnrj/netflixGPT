import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';
// import Movie from './Movie';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store)=> store.gptSearch.showGptSearch);
  // const gptMovies = useSelector((store)=> store.gptSearch.gptMovies);

  return (
    <main>
      <Header/>
      {showGptSearch ? <GPTSearchPage/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }   
    </main>
    
  )
}

export default Browse
