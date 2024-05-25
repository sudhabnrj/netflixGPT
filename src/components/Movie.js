import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';
import Header from './Header';
import { useSelector } from 'react-redux';
import { BANNER_IMG_CDN_URL, MovieNoPoster } from '../utils/constants';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MovieCastList from './MovieCastList';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import useTrailorVideo from '../hooks/useTrailorVideo';
import YouTubeEmbed from './YouTubeEmbed';
import MoreVideos from './MoreVideos';
import RecommendedMovie from './RecommendedMovie';
import Shimmer from './Shimmer';
import LoadingImg from './LoadingImg';

const Movie = () => {
    const movieResult = useSelector((store)=> store.movies.movieInfo);
    const trailorMovie = useSelector((store)=> store.movies?.trailorVideo);
    const {movieID} = useParams();
    useMovieDetails(movieID);
    useTrailorVideo(movieID);

    const [isOpen, setIsOpen] = useState(false);

    if (movieResult === null) {
        return(
            <Shimmer/>
        );
    };

    const {backdrop_path, poster_path, title, genres, overview, runtime, release_date, tagline, vote_average} = movieResult;

    const toHoursAndMinutes = (totalMinutes) => {
        const hour = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        if(hour > 0){
            return `${hour}h ${minutes}m`;
        }else{
            return `${minutes}m`;
        }
    };
    const percentage = Math.round(parseFloat((vote_average) / 10 * 100));

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Header />
            <main className='w-full '>
                <div className="w-full relative h-auto md:h-[667px] lg:min-h-[720px] md:overflow-hidden bg-black">
                    <div>
                        <div className="bg-header-gradient absolute top-0 bottom-0 left-0 right-0 z-10"></div>
                        <img className="h-auto md:h-screen w-full object-cover mx-auto brightness-[.5] md:block hidden"  src={BANNER_IMG_CDN_URL + backdrop_path} alt="moviebg" />
                        <div className="w-full mx-auto block md:hidden blur-sm">
                            <LoadingImg className={`posterImg w-full rounded-none`} src={poster_path ? (BANNER_IMG_CDN_URL + poster_path) : (MovieNoPoster)} alt="Poster" />
                        </div>
                    </div>
                    <div className="md:top-0 md:bottom-0 bottom-2 absolute w-full left-0 right-0 z-20">
                        <div className="container mx-auto px-6 lg:px-0">
                            <div className="w-full flex md:flex-row flex-col justify-start items-center md:mt-32 md:mb-20">
                                <div className="lg:w-1/5 w-2/5 md:block hidden">
                                    <LoadingImg className={`posterImg w-full h-full object-cover object-center rounded-md`} src={poster_path ? (BANNER_IMG_CDN_URL + poster_path) : (MovieNoPoster)} alt="Poster" />
                                </div>
                                <div className="lg:w-4/5 md:w-3/5 w-full">
                                    <div className="md:pl-5">
                                        <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-white mb-1">{title}
                                            <span className="text-slate-300 text-base md:text-3xl">({release_date.slice(0, 4)})</span>
                                        </h1>
                                        <ul className="flex justify-start items-center mb-5 flex-wrap">
                                            <li className="text-slate-300 mr-4 pr-6 relative 
                                            after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-2 after:h-2 after:rounded">
                                                {release_date}
                                            </li>
                                            <li className="text-slate-300 mr-4 pr-6 relative 
                                            after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-2 after:h-2 after:rounded">
                                                {genres.map((gener, index)=> {
                                                    return(
                                                        <span key={index}>
                                                            {gener?.name}
                                                            {index < genres.length - 1 && ', '}
                                                        </span>
                                                    );
                                                })}
                                            </li>
                                            <li className="text-slate-300 mr-2 pr-2">
                                                <span>{toHoursAndMinutes(runtime)}</span>
                                            </li>
                                        </ul>
                                        <p className="text-slate-300 text-md md:text-2xl italic mb-4">{tagline}</p>
                                        <div className="mb-4 flex justify-start items-center">                                    
                                            <div className="relative rounded-full bg-[#081c22] w-16 h-16 text-center text-white font-bold flex justify-center items-center p-1">
                                                <CircularProgressbar 
                                                    value={percentage} 
                                                    text={`${percentage}%`} 
                                                    styles={buildStyles({
                                                        textSize: '26px',
                                                        textColor: '#ffffff',
                                                        trailColor: '#204529',
                                                        backgroundColor: '#21d07a',
                                                    })}
                                                />
                                            </div>
                                            <span className="text-base sm:text-xl text-white ml-2">User Score</span>
                                            <Link onClick={openModal} className="text-white font-bold text-base sm:text-xl ml-5 flex items-center">
                                                <PlayArrowOutlinedIcon className="!w-10 !h-10" />
                                                <span>Play Trailer</span></Link>
                                        </div>
                                        <p className="text-white text-base sm:text-xl pb-5 sm:pb-0 hidden md:block">{overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MoreVideos/>
                <MovieCastList/>
                <RecommendedMovie/>
                
            </main>
            {isOpen && 
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative w-[95%] lg:w-1/2 bg-white rounded shadow-lg">
                            <button className="absolute -top-14 right-0 text-5xl text-white" onClick={closeModal}>
                                <CloseOutlinedIcon/>
                            </button>
                            <YouTubeEmbed videoId={trailorMovie?.key}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Movie;
