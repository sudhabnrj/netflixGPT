import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies) return;

    const heroBgMovie = movies[0];

    const { original_title, overview, id } = heroBgMovie;

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0 relative h-screen">
        <VideoTitle movieId={id} title={original_title} description={overview}  />
      </div>
      <VideoBackground movieId={id}/>   
    </div>
  )
}

export default MainContainer
