import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptSearchReducer from './gptSearchSlice';
import configReducer from './configSlice'
import tvshowReducer from './tvshowSlice';
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gptSearch: gptSearchReducer,
        config: configReducer,
        tvshows: tvshowReducer,
    }
});

export default appStore;