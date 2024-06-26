import React from 'react'
import {Link} from 'react-router-dom';
// import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({title, description, movieID}) => {
  return (
    <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 px-6 lg:p-0">
      <h1 className=" text-2xl sm:text-5xl lg:text-7xl font-black w-full lg:w-2/4 text-white">{title}</h1>
      <p className="lg:w-2/4 w-full text-white mt-8 text-md 2xl:text-xl hidden md:block">{description}</p>
      <div className="flex gap-2 mt-5">
        {/* <Link  className="bg-white text-black hover:bg-opacity-50 rounded-sm px-8 py-2 font-medium text-xl flex items-center justify-center">
          <PlayCircleFilledOutlinedIcon className="mr-1" />
          Play
        </Link> */}
        <Link to={`/movie/${movieID}`} className="bg-white text-black hover:bg-opacity-50 rounded-sm px-8 py-2 font-medium text-xl flex items-center justify-center">
          <InfoOutlinedIcon className="mr-1"/>
          More Info
        </Link>
      </div>
    </div>
  )
}

export default VideoTitle;