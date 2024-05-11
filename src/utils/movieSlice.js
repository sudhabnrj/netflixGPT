import { createSlice } from '@reduxjs/toolkit';
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
        popularMovies: null,
        upcomingMovies: null,
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
        }


    }
});

export const { addNowPlayingMovies, removeNowPlayingMovie, addTrailorVideo, addPopularMovies, addUpcomingMovies } = movieSlice.actions; 
export default movieSlice.reducer;