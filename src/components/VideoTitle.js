import React from 'react'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({title, description}) => {
  return (
    <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2">
      <h1 className="text-7xl font-black w-2/4 text-white">{title}</h1>
      <p className="w-2/4 text-white mt-8 text-xl">{description}</p>
      <div className="flex gap-2 mt-5">
        <button className="bg-white text-black hover:bg-opacity-50 rounded-sm px-8 py-2 font-medium text-xl flex items-center justify-center">
          <PlayCircleFilledOutlinedIcon className="mr-1" />
          Play
        </button>
        <button className="bg-stone-600 text-white bg-opacity-70 hover:bg-opacity-50 rounded-sm px-5 py-2 font-medium text-xl flex items-center justify-center">
          <InfoOutlinedIcon className="mr-1"/>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;