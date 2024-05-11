import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';

const Movie = () => {
    const {movieID} = useParams();
    const movieInfo = useMovieDetails(movieID);

    if (movieInfo === null) return 'Loding...';

    const {
        title,
    } = movieInfo;

    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default Movie;
