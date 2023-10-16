
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch(); 

    // const nowPlayingMovies = useSelector(
    //     (store) => store.movies.nowPlayingMovies
    //   );
    

    //Fetching the data and then pushing that data into the store
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results)); 
    };

    //Making the API call in the useEffect because it needs to be called only once
    
    useEffect(() => {
         getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;