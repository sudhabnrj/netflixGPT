import { createSlice } from '@reduxjs/toolkit';
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        movieInfo: null,
        movieCast: null,
        allVideos: null,
        movieRecomended: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload; 
        },
        addTrailorVideo: (state, action)=> {
            state.trailorVideo = action.payload;
        },
        addPopularMovies: (state, action)=> {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMovieInfo: (state, action)=> {
            state.movieInfo = action.payload;
        },
        addMovieCast: (state, action)=> {
            state.movieCast = action.payload;
        },
        addMoreVideos: (state, action)=> {
            state.allVideos = action.payload;
        },
        addRecomendedVideos: (state, action)=> {
            state.movieRecomended = action.payload;
        }

    }
});

export const { addNowPlayingMovies, removeNowPlayingMovie, addTrailorVideo, addPopularMovies, addUpcomingMovies, addMovieInfo, addMovieCast, addMoreVideos, addRecomendedVideos } = movieSlice.actions; 
export default movieSlice.reducer;