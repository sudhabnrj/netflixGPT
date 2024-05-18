import { createSlice } from '@reduxjs/toolkit';
const gptSearch = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleDisplayGptSearch: (state) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            state.gptMovies = action.payload;
        },
        clearMovieResults: (state, action) => {
            state.movieName = null;
            state.movieResult = null;
        },
        setHomePage: (state)=> {
            state.showGptSearch = false;
        }
    }
});

export const {toggleDisplayGptSearch, addGptMovieResult, clearMovieResults, setHomePage} = gptSearch.actions;
export default gptSearch.reducer;