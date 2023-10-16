import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
    },
    reducers:{
        addNowPlayingMovies: (action, state) =>{
            state.nowPlayingMovies= action.payload;
        },
    },
});


export const { addNowPlayingMovies } = MoviesSlice.actions; 
export default MoviesSlice.reducer;