import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const GPTMovieSuggetion = () => {

  const gptMovies = useSelector((store)=> store.gptSearch.gptMovies);

  if(gptMovies === null) return <p>Loading</p>;

  const filterResult = gptMovies.filter((movie)=> movie?.poster_path !== null); 
  

  return (
    <div className="w-11/12 mx-auto px-6 lg:px-0">
      <div className="backdrop-blur backdrop-filter mt-10 p-5 bg-opacity-30 bg-black">
        <div className="flex justify-start items-stretch gap-8 flex-wrap">
          {filterResult.map((item)=> {
            return(
              <Link className="w-40 movie-result" key={item.id} to={"/watch/" + item.id}>
                <MovieCard movieTitle={item.title} posterPath={item.poster_path}/>
              </Link>
            );
          })}
        </div>     
      </div>
    </div>
  )
}

export default GPTMovieSuggetion
