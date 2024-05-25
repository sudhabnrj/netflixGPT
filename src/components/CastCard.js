import React from 'react'
// import { Shimmer, Image } from 'react-shimmer';
import { BANNER_IMG_CDN_URL, USER_AVATAR } from '../utils/constants';
import LoadingImg from './LoadingImg';

const CastCard = ({ originalName, characterName, src }) => {
  return (
    <div className="cursor-pointer rounded-md h-full w-40 relative shadow-lg">
      <div className=" rounded-md movie-result h-[240px]">
        <LoadingImg className={`posterImg w-full h-full object-cover object-center`} src={src ? BANNER_IMG_CDN_URL + src : USER_AVATAR} alt={originalName} />
      </div>
      <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 rounded-md p-3">
        <h3 className="text-white font-bold text-lg leading-5 mb-2">{originalName}</h3>
        <p className="text-white font-medium text-sm">{characterName}</p>
      </div>
    </div>
  )
}

export default CastCard;
