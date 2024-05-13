import React from 'react'
import { MoviePosterCDN_URL } from '../utils/constants';
import { Shimmer, Image } from 'react-shimmer'

const MovieCard = ({posterPath, movieTitle}) => {
  return (
    <div className="cursor-pointer">
      <Image src={MoviePosterCDN_URL + posterPath} alt={movieTitle} fallback={<Shimmer width={200} height={300} />} />
    </div>
  )
}

export default MovieCard
