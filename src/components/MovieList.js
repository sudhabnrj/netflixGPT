import React from 'react'
import MovieCard from './MovieCard';
// import "../assets/css/slick-theme.min.css";
import "../assets/css/slick.min.css";
import Slider from "react-slick";
import NextArrow from './NextArow';
import PrevArrow from './PrevArrow';
import { Link } from 'react-router-dom';


const MovieList = ({movies, title, poster_path, className}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        // initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              arrows: false,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
    };
    return (
        <div className="pb-10">
            <h2 className="text-slate-300 text-2xl lg:text-3xl font-bold py-5">{title}</h2>
            <div className="slider-container relative">
                <Slider className={`slick--slider`} {...settings}>
                    {movies?.map((movie) => {
                        return(
                          <Link className="movie-result" key={movie?.id} to={"/movie/" + movie?.id}>
                            <MovieCard 
                              text={`${Math.round(parseFloat((movie?.vote_average) / 10 * 100))}%`} 
                              value={Math.round(parseFloat((movie?.vote_average) / 10 * 100))} 
                              className={className}
                              movieTitle={movie.title} 
                              posterPath={movie.poster_path}
                            />
                            <div className="textBlock text-white flex flex-col gap-y-1 mt-8">
                              <span className='text-[15px] sm:text-[20px] md:text-[17px] truncate'>
                                  {movie?.title || movie?.name}
                              </span>
                              <span className={`opacity-50 text-[13px] sm:text-[15px] md:text-[14px]`}>
                                  {movie?.release_date}
                              </span>
                            </div>
                          </Link>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default MovieList
