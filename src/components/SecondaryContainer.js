import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);

  // if(!movies) return;

  //console.log('All Movies:', movies.popularMovies);

  return (
    movies.nowPlayingMovies && (
    <div className="bg-black z-10 relative">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="relative xl:-top-[120px] 2xl:-top-[190px]">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
          <MovieList title={'Popular Movies'} movies={movies.popularMovies}/>
          <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies}/>
        </div>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;
