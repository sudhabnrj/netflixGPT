import React from 'react'
import { MoviePosterCDN_URL } from '../utils/constants';

const MovieCard = ({posterPath, movieTitle}) => {
  return (
    <div className="cursor-pointer">
      <img src={MoviePosterCDN_URL + posterPath} alt={movieTitle} />
    </div>
  )
}

export default MovieCard
