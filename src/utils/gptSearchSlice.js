import { createSlice } from '@reduxjs/toolkit';
const gptSearch = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleDisplayGptSearch: (state) =>{
            state.showGptSearch = !state.showGptSearch
        },
    }
});

export const {toggleDisplayGptSearch} = gptSearch.actions;
export default gptSearch.reducer;