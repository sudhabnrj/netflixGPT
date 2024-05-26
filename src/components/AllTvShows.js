import React from 'react'
import Header from './Header';
import useAllTvShows from '../hooks/useAllTvShows';
import { useSelector, useDispatch } from 'react-redux';
import Shimmer from './Shimmer';
import { addTvFilter } from '../utils/tvshowSlice'; 
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const AllTvShows = () => {
    const listOfAllTvShow =  useSelector((store)=> store.tvshows?.listOfAllTvShows?.results);
    const filter = useSelector((store)=> store.tvshows.tvFilter);
    const dispatch = useDispatch();
    useAllTvShows();

    if (listOfAllTvShow === null) {
        return(
            <Shimmer/>
        );
    };

    const handleFilter = (e) =>{
        dispatch(addTvFilter(e.target.value));
    };

    const sortTvShows = (tvshows, filter) => {
        switch(filter){
          case 'Popularity Descending':
            return [...tvshows].sort((a, b)=> b.popularity - a.popularity);
          case 'Popularity Ascending':
            return [...tvshows].sort((a, b)=> a.popularity - b.popularity);
          case 'Rating Descending':
            return [...tvshows].sort((a, b)=> b.vote_average - a.vote_average);
          case 'Rating Ascending':
            return [...tvshows].sort((a, b)=> a.vote_average - b.vote_average);
          case 'Title (A-Z)':
            return [...tvshows].sort((a, b)=> (a.title || '').localeCompare(b.title || ''));
          default:
            return tvshows;
        }
    };

    const sortedTvShows = sortTvShows(listOfAllTvShow || [], filter)

    // console.log('hgjhg', sortedTvShows);
    

    return (
        <>
            <Header/>
            <main className="relative">
                <div className="w-full bg-slate-900 min-h-[700px]">
                <div className="container mx-auto px-6 lg:px-0">
                    <div className="pt-40 pb-10 flex justify-between items-center sm:flex-row flex-col">
                        <h1 className="text-white text-2xl font-bold">Explore Tv Shows</h1>
                        <div className="flex justify-end items-center mt-4 sm:mt-0">
                            <select onChange={handleFilter} value={filter} className="outline-none py-2 px-4 rounded-md bg-slate-700 text-slate-300">
                            <option>Popularity Descending</option>
                            <option>Popularity Ascending</option>
                            <option>Rating Descending</option>
                            <option>Rating Ascending</option>
                            <option>Title (A-Z)</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 sm:gap-y-10 lg:grid-cols-5 gap-x-5'>
                            {sortedTvShows && sortedTvShows.map((tv)=> {
                                return(
                                    <Link className="movie-result" key={tv.id} to={"/tv/" + tv.id}>
                                    <MovieCard 
                                        className={`!w-full`}
                                        text={`${Math.round(parseFloat((tv?.vote_average) / 10 * 100))}%`} 
                                        value={Math.round(parseFloat((tv?.vote_average) / 10 * 100))} 
                                        movieTitle={tv.title} 
                                        posterPath={tv.poster_path}/>
                                        <div className="textBlock text-white flex flex-col gap-y-1 mt-8 !w-full">
                                        <span className='text-[15px] sm:text-[20px] md:text-[17px] truncate'>
                                            {tv?.title || tv?.name}
                                        </span>
                                        <span className={`opacity-50 text-[13px] sm:text-[15px] md:text-[14px]`}>
                                            {tv?.release_date}
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

export default AllTvShows;
