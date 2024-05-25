
import { createSlice } from '@reduxjs/toolkit';
const tvshowSlice = createSlice({
    name: 'tvshow',
    initialState: {
        tvShowInfo: null,
        tVTrailorVideo: null,
        listOfAllTvShows: null,        
        tvFilter: 'Popularity Descending',
        tvShowCast: null,
    },
    reducers : {
        addTvShowInfo: (state, action)=> {
            state.tvShowInfo = action.payload;
        },
        addTvTrailorVideo: (state, action)=> {
            state.tVTrailorVideo = action.payload;
        },
        addAllListOfTvShows : (state, action) => {
            state.listOfAllTvShows = action.payload;
        },
        addTvFilter: (state, action)=> {
            state.tvFilter = action.payload;
        },
        addTvShowCast: (state, action)=>{
            state.tvShowCast = action.payload;
        }
    }
});

export const {addTvShowInfo, addAllListOfTvShows, addTvFilter, addTvTrailorVideo, addTvShowCast} = tvshowSlice.actions;
export default tvshowSlice.reducer;