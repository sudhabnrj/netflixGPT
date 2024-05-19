import React from 'react'
import { useParams } from 'react-router-dom';
import UseMovieCast from './../hooks/UseMovieCast';
import CastCard from './CastCard';
import { useSelector } from 'react-redux';
import "../assets/css/slick.min.css";
import Slider from "react-slick";
import NextArrow from './NextArow';
import PrevArrow from './PrevArrow';

const MovieCastList = () => {
  const {movieID} = useParams();
  UseMovieCast(movieID);
  const castInfo = useSelector((store)=> store.movies?.movieCast);

  if (castInfo === null) return 'Loding...';
  
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  
  return (
    <div className="bg-slate-900 py-8">
      <div className="w-full">
        <div className="container mx-auto">
          <h2 className="text-white font-bold md:text-3xl text-xl mb-8">Cast ({castInfo.cast.length})</h2>
        </div>
        <Slider {...settings}>
          {castInfo?.cast.map((cast)=>
            cast?.profile_path ? (
              <CastCard key={cast.id} originalName={cast?.name} characterName={cast?.character} src={cast?.profile_path}/>
            ) : null
          )}
        </Slider>
      </div>

      <div className="w-full mt-8">
        <div className="container mx-auto">
          <h2 className="text-white font-bold md:text-3xl text-xl mb-8">Crew ({castInfo.crew.length})</h2>
        </div>
        <Slider {...settings}>
          {castInfo?.crew.map((cast)=>
            cast?.profile_path ? (
              <CastCard key={cast.id} originalName={cast?.name} characterName={cast?.character} src={cast?.profile_path}/>
            ) : null
          )}
        </Slider>
      </div>

    </div>
  )
}

export default MovieCastList;