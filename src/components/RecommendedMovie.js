import React, { useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import useRecommendedMovie from '../hooks/useRecommendedMovie';
import {useSelector} from 'react-redux';
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import { BANNER_IMG_CDN_URL, MovieNoPoster } from './../utils/constants';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Shimmer from './Shimmer';
import LoadingImg from './LoadingImg';

const RecommendedMovie = () => {
  const movieRecomended = useSelector((store)=> store.movies.movieRecomended);
  const {movieID} = useParams();
  useRecommendedMovie(movieID);

  let sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(null);

  if(!movieRecomended){
    return(
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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    afterChange: (index)=> setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  const totalSlides = Math.ceil(movieRecomended.length / settings.slidesToShow);

  return (
    <div className="bg-slate-800 py-8">
      {movieRecomended && movieRecomended.length > 0 ?
        (<div className="w-full">          
            <div className="container mx-auto px-6 lg:px-0">
                <h2 className="text-white font-bold md:text-3xl text-xl mb-8">Recommendations({movieRecomended.length})</h2>
            </div>
            <div className="relative">
              <Slider ref={slider => {
                  sliderRef = slider;
                }} {...settings}>
                {movieRecomended?.map((item, index)=> {
                    return(
                      <Link key={index} to={/movie/ + item.id} className="cursor-pointer rounded-md w-30 relative p-5">
                        <div className="rounded-md movie-result relative">
                          <LoadingImg className={`w-full h-full object-cover object-center`} 
                            src={item?.poster_path ? (BANNER_IMG_CDN_URL + item?.poster_path) : (MovieNoPoster)} alt={item?.title} 
                          />
                          <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 rounded-md p-3">
                            <h3 className="text-white font-bold text-2xl leading-5 mb-2">{item?.title}</h3>
                          </div>
                        </div>
                      </Link>
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
        </div>) : (
          <div className="bg-slate-800 py-8">
            <div className="w-full">
                <div className="container mx-auto">
                    <h2 className="text-white font-bold md:text-3xl text-xl mb-8">
                        No Movies Available
                    </h2>
                </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default RecommendedMovie