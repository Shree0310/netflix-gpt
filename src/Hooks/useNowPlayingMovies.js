import { API_OPTIONS, TMDB_API_KEY } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = (shouldFetch = true) =>{
    const dispatch = useDispatch(); 

    //For memoization 
    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
      );
    
    //Fetching the data and then pushing that data into the store
    const getNowPlayingMovies = async () => {
        console.log("API Key:", TMDB_API_KEY);
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&page=1`, 
        API_OPTIONS);
        const json = await data.json();
        console.log("API Response:", json);
        dispatch(addNowPlayingMovies(json.results)); 
    };

    //Making the API call in the useEffect because it needs to be called only once
    useEffect(() => {
        if (shouldFetch && !nowPlayingMovies) {
            getNowPlayingMovies();
        }
    }, [shouldFetch, nowPlayingMovies]);

};

export default useNowPlayingMovies;