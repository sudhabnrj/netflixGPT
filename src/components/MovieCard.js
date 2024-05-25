import React from 'react'
import { MoviePosterCDN_URL } from '../utils/constants';
// import Shimmer from './Shimmer';
import LoadingImg from './LoadingImg';
import {MovieNoPoster} from '../utils/constants';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const MovieCard = ({posterPath, movieTitle, value, text, className}) => {
  return (
    <div className={`movieCard relative ${className}`}>
      <div className="relative w-full aspect-[1/1.5] bg-cover bg-center flex flex-col items-end justify-between p-[0px] transition-all duration-500 hover:opacity-50">
        <LoadingImg className={`posterImg w-full h-full object-cover object-center`} src={posterPath ? MoviePosterCDN_URL + posterPath : MovieNoPoster} alt={movieTitle} />        
      </div>
      <div className="absolute -bottom-6 left-3 z-10">
        <div className="relative rounded-full bg-[#081c22] w-16 h-16 text-center text-white font-bold flex justify-center items-center p-1">
          <CircularProgressbar 
              value={value} 
              text={text} 
              styles={buildStyles({
                  textSize: '26px',
                  textColor: '#ffffff',
                  trailColor: '#204529',
                  backgroundColor: '#21d07a',
              })}
          />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
