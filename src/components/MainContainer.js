import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies){
      return(
        <Shimmer/>
      );
    };

    const heroBgMovie = movies[Math.floor(Math.random() * movies.length)];

    const { original_title, overview, id } = heroBgMovie;

  return (
    <div className="w-full lg:h-full relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0 relative h-[400px] sm:h-[600px] md:h-[500px] xl:h-screen">
        <VideoTitle movieID={id} title={original_title} description={overview}  />
      </div>
      <VideoBackground movieID={id}/>   
    </div>
  )
}

export default MainContainer
