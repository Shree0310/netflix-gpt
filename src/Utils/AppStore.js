import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./UserSlice"
import moviesReducer from "./MoviesSlice";
import gptReducer from "./GPTSlice";
import configReducer from "./ConfigSlice";


const AppStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer,

        },
    });

export default AppStore;