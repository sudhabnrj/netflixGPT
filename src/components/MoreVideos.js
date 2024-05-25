import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useMoreVideos from './../hooks/useMoreVideos';
import { useSelector } from 'react-redux';
// import "../assets/css/slick.min.css";
import Slider from "react-slick";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import YouTubeEmbed from './YouTubeEmbed';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Shimmer from './Shimmer';
import LoadingImg from './LoadingImg';

const MoreVideos = () => {
    const {movieID} = useParams();
    useMoreVideos(movieID);
    let sliderRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [videoID, setVideoID] = useState(null);

    const allVideos = useSelector((store)=> store.movies.allVideos);

    if(allVideos === null){
      return (
        <Shimmer/>
      );
    };

    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        afterChange: (index)=> setCurrentSlide(index),
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };

    const totalSlides = Math.ceil(allVideos.length / settings.slidesToShow);

    const openModal = (key) => {
      setIsOpen(true);
      setVideoID(key);
    }
    const closeModal = () => {
      setIsOpen(false);
      setVideoID(null);
    }

    //console.log('all allVideos', allVideos);
  
    return (
    <>
    {allVideos && allVideos.length > 0 ? (
      <div className="bg-slate-800 py-8">
        <div className="w-full">          
            <div className="container mx-auto px-6 lg:px-0">
                <h2 className="text-white font-bold md:text-3xl text-xl mb-8">More Videos ({allVideos.length})</h2>
            </div>
            <div className="relative">
                <Slider ref={slider => {
                  sliderRef = slider;
                  }} {...settings}>
                    {allVideos?.map((video, index)=> {
                        return(
                            <div key={index} className="m-2">
                              <div className="p-0 sm:p-4 relative">
                                <LoadingImg className={`posterImg w-full h-full object-cover object-center`} alt={video.name} src={`https://img.youtube.com/vi/${video?.key}/hqdefault.jpg`} />
                                <button className="text-white text-opacity-50 hover:text-opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" onClick={()=> openModal(video.key)}><PlayCircleFilledOutlinedIcon className='!w-24 !h-24'  /></button>
                              </div>
                            </div>
                        );
                    })}
                </Slider>

                <div className="absolute top-1/2 -translate-y-1/2 w-full">
                  <button disabled={currentSlide === 0} className="absolute left-0 bg-black bg-opacity-75 hover:bg-opacity-100  text-white py-4 px-2" onClick={previous}>
                    <ArrowBackIosNewOutlinedIcon/>
                  </button>
                  <button disabled={currentSlide >= (totalSlides - 1) * settings.slidesToScroll } className="absolute right-0 bg-black bg-opacity-75 hover:bg-opacity-100 text-white py-4 px-2" onClick={next}>
                    <ArrowForwardIosOutlinedIcon/>
                  </button>
                </div>
            </div>          
        </div>
      </div>): (
        <div className="bg-slate-800 py-8">
            <div className="w-full">
                <div className="container mx-auto">
                    <h2 className="text-white font-bold md:text-3xl text-xl mb-8">
                        No Videos Available
                    </h2>
                </div>
            </div>
        </div>
      )}

      {/* Video modal */}
      {isOpen && 
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-[95%] lg:w-1/2 bg-white rounded shadow-lg">
                    <button className="absolute -top-14 right-0 text-5xl text-white" onClick={closeModal}>
                        <CloseOutlinedIcon/>
                    </button>
                    <YouTubeEmbed videoId={videoID}/>
                </div>
            </div>
        </>
      }

    </>
  )
}

export default MoreVideos
