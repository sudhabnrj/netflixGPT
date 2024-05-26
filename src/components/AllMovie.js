import React from 'react'
import Header from './Header';
import useAllMovies from '../hooks/useAllMovies';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { addFilter } from '../utils/movieSlice';
 
const AllMovie = () => {
  const listOfAllMovies =  useSelector((store)=> store.movies?.listOfAllMovies?.results);
  const filter = useSelector((store)=> store.movies.setFilter);
  const dispatch = useDispatch();
  useAllMovies();

  if (listOfAllMovies === null) {
    return(
        <Shimmer/>
    );
  };

  const handleFilter = (e) =>{
    dispatch(addFilter(e.target.value));
  };

  const sortMovies = (movies, filter) => {
    switch(filter){
      case 'Popularity Descending':
        return [...movies].sort((a, b)=> b.popularity - a.popularity);
      case 'Popularity Ascending':
        return [...movies].sort((a, b)=> a.popularity - b.popularity);
      case 'Rating Descending':
        return [...movies].sort((a, b)=> b.vote_average - a.vote_average);
      case 'Rating Ascending':
        return [...movies].sort((a, b)=> a.vote_average - b.vote_average);
      case 'Release Date Descending':
        return [...movies].sort((a, b)=> new Date(b.release_date) - new Date(a.release_date));
      case 'Release Date Ascending':
        return [...movies].sort((a, b)=> new Date(a.release_date) - new Date(b.release_date));
      case 'Title (A-Z)':
        return [...movies].sort((a, b)=> a.title.localeCompare(b.title));
      default:
        return movies;
    }
  };

  const sortedMovies = sortMovies(listOfAllMovies || [], filter)

  //console.log('hgjhg', listOfAllMovies);

  return (
    <>
      <Header/>
      <main className="relative">
        <div className="w-full bg-slate-900 min-h-[700px]">
          <div className="container mx-auto px-6 lg:px-0">
            <div className="pt-40 pb-10 flex justify-between items-center sm:flex-row flex-col">
              <h1 className="text-white text-2xl font-bold">Explore Movies</h1>
              <div className="flex justify-end items-center mt-4 sm:mt-0">
                <select onChange={handleFilter} value={filter} className="outline-none py-2 px-4 rounded-md bg-slate-700 text-slate-300">
                  <option>Popularity Descending</option>
                  <option>Popularity Ascending</option>
                  <option>Rating Descending</option>
                  <option>Rating Ascending</option>
                  <option>Release Date Descending</option>
                  <option>Release Date Ascending</option>
                  <option>Title (A-Z)</option>
                </select>
              </div>
            </div>
            <div className='grid'>
              <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 sm:gap-y-10 lg:grid-cols-5 gap-x-5'>
                {sortedMovies && sortedMovies.map((movie)=> {
                  return(
                    <Link className="movie-result" key={movie.id} to={"/movie/" + movie.id}>
                      <MovieCard 
                        className={`!w-full`}
                        text={`${Math.round(parseFloat((movie?.vote_average) / 10 * 100))}%`} 
                        value={Math.round(parseFloat((movie?.vote_average) / 10 * 100))} 
                        movieTitle={movie.title} 
                        posterPath={movie.poster_path}/>
                        <div className="textBlock text-white flex flex-col gap-y-1 mt-8 !w-full">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AllMovie
