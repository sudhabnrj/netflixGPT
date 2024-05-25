import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import LoadingImg from './LoadingImg';
import { notFound } from './../utils/constants';

const GPTMovieSuggetion = () => {

  const gptMovies = useSelector((store)=> store.gptSearch.gptMovies);
  // const [loading, setLoading] = useState(false);

  // if(!gptMovies){
  //   setLoading(true);
  // }

  //const filterResult = gptMovies ? gptMovies.filter((movie)=> movie?.poster_path !== null) : []; 

  return (
    <>
      {gptMovies &&
        <div className="w-11/12 mx-auto">
          { gptMovies.length > 0 ? (
            <div className="grid backdrop-blur backdrop-filter mt-10 p-5 bg-opacity-30 bg-black">
              <div className=" col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-10 lg:grid-cols-5 gap-x-5">
                {gptMovies.map((item)=> {
                  return(
                    <Link className=" movie-result" key={item.id} to={"/movie/" + item.id}>
                      <MovieCard 
                        className={`!w-full`}
                        text={`${Math.round(parseFloat((item?.vote_average) / 10 * 100))}%`} 
                        value={Math.round(parseFloat((item?.vote_average) / 10 * 100))} 
                        movieTitle={item.title} 
                        posterPath={item.poster_path}/>
                        <div className="textBlock text-white flex flex-col gap-y-1 mt-8 !w-full">
                          <span className='text-[15px] sm:text-[20px] md:text-[17px] truncate'>
                              {item?.title || item?.name}
                          </span>
                          <span className={`opacity-50 text-[13px] sm:text-[15px] md:text-[14px]`}>
                              {item?.release_date}
                          </span>
                        </div>
                    </Link>
                  );
                })}
              </div>     
            </div>) : (
              <div className="flex justify-center items-center flex-col mt-10 text-center">
                <h1 className="text-3xl text-white">Sorry, no result found </h1>
                  <LoadingImg className={`w-[80%]`} src={notFound} alt="404" />
              </div>
            )
          }
        </div>
      }
    </>
  )
}

export default GPTMovieSuggetion
