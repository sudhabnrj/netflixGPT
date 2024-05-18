import React from 'react'
import { Shimmer, Image } from 'react-shimmer';
import { BANNER_IMG_CDN_URL } from '../utils/constants';

const CastCard = ({ originalName, characterName, src }) => {
  return (
    <div className="cursor-pointer rounded-md h-full w-40 relative shadow-lg">
      <div className=" rounded-md movie-result">
        <Image src={BANNER_IMG_CDN_URL + src} alt={originalName} fallback={<Shimmer width={160} height={240} />} />
      </div>
      <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 rounded-md p-3">
        <h3 className="text-white font-bold text-lg leading-5 mb-2">{originalName}</h3>
        <p className="text-white font-medium text-sm">{characterName}</p>
      </div>
    </div>
  )
}

export default CastCard;
