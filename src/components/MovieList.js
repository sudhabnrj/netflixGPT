import React from 'react'
import MovieCard from './MovieCard';
// import "../assets/css/slick-theme.min.css";
import "../assets/css/slick.min.css";
import Slider from "react-slick";
import NextArrow from './NextArow';
import PrevArrow from './PrevArrow';
import { Link } from 'react-router-dom';
 

const MovieList = ({movies, title, poster_path}) => {
    // console.log('All Movies', movies);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
        <div className="">
            <h2 className="text-slate-300 text-2xl font-bold py-5">{title}</h2>
            <div className="slider-container relative">
                <Slider {...settings}>
                    {movies?.map((movie) => {
                        return(
                          <Link key={movie.id} to={"/watch/" + movie.id}>
                            <MovieCard   movieTitle={movie.title} posterPath={movie.poster_path}/>
                          </Link>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default MovieList
