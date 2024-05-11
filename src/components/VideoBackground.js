import React from 'react'
import { useSelector } from 'react-redux';
import useTrailorVideo from '../hooks/useTrailorVideo';


const VideoBackground = ({movieId}) => {
  const trailorMovie = useSelector((store)=> store.movies?.trailorVideo);
  console.log('Trailor Video Data',trailorMovie);
  useTrailorVideo(movieId);
  console.log('Main container Movie ID and Movie Key', movieId, trailorMovie?.key);
  return (
    <>
      <iframe
        className="w-full aspect-video object-cover absolute top-0 left-0 cursor-text"
        src={"https://www.youtube.com/embed/" + trailorMovie?.key + "?&autoplay=1&mute=1&loop=1" }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
      <div className="bg-header-gradient absolute top-0 bottom-0 left-0 right-0 "></div>
    </>
  )
}

export default VideoBackground
