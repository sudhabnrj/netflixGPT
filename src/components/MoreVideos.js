import React from 'react'
import { useParams } from 'react-router-dom';
import useMoreVideos from './../hooks/useMoreVideos';
import { useSelector } from 'react-redux';
import "../assets/css/slick.min.css";
import Slider from "react-slick";
import NextArrow from './NextArow';
import PrevArrow from './PrevArrow';

const MoreVideos = () => {
    const {movieID} = useParams();
    useMoreVideos(movieID);

    const allVideos = useSelector((store)=> store.movies.allVideos);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

  return (
    <>
    {allVideos && allVideos.length > 0 ? (
      <div className="bg-slate-800 py-8">
        <div className="w-full">          
            <div className="container mx-auto">
                <h2 className="text-white font-bold md:text-3xl text-xl mb-8">More Videos ({allVideos.length})</h2>
            </div>
            <>
                <Slider {...settings}>
                    {allVideos?.map((video, index)=> {
                        return(
                            <div key={index} className="m-2">
                              <img alt={video.name} src={`https://img.youtube.com/vi/${video?.key}/hqdefault.jpg`} />
                                {/* <iframe
                                    className="aspect-video md:w-[500px] md:h-[315px]"
                                    src={
                                    "https://www.youtube-nocookie.com/embed/" + video?.key
                                    }
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe> */}
                            </div>
                        );
                    })}
                </Slider>
            </>          
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
    </>
  )
}

export default MoreVideos
