import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        
    },
    reducers: {
        toggleGptSearchView : (state, action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult : (state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        }
    }
});


export const {toggleGptSearchView, addGPTMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;