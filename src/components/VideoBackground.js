import React from 'react'
import { useSelector } from 'react-redux';
import useTrailorVideo from '../hooks/useTrailorVideo';
// import LoadingImg from './LoadingImg';
import { BANNER_IMG_CDN_URL } from './../utils/constants';
import useMovieDetails from './../hooks/useMovieDetails';


const VideoBackground = ({movieID}) => {
  const trailorMovie = useSelector((store)=> store.movies?.trailorVideo);
  const movieResult = useSelector((store)=> store.movies.movieInfo);
  useTrailorVideo(movieID);
  useMovieDetails(movieID);
  console.log('trailorMovie Video', trailorMovie);
  console.log('Trailor Background Image', movieResult);
  return (
    <>
      {trailorMovie !== undefined ?
        (<iframe
          className="w-full h-[600px] lg:h-auto lg:aspect-video object-cover absolute top-0 left-0 cursor-text"
          src={"https://www.youtube.com/embed/" + trailorMovie?.key + "?&autoplay=1&mute=1&loop=1" }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen="allowfullscreen">
        </iframe>) : (
          <img className={`w-full h-[600px] lg:h-auto lg:aspect-video object-cover absolute top-0 left-0 cursor-text`} src={BANNER_IMG_CDN_URL + movieResult?.backdrop_path} alt={''} />
        )
      }
      <div className="bg-header-gradient absolute top-0 bottom-0 left-0 right-0 "></div>
    </>
  )
}

export default VideoBackground
