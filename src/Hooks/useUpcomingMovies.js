import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/MoviesSlice";
import { API_OPTIONS, TMDB_API_KEY } from "../Utils/Constants";

const useUpcomingMovies = (shouldFetch = true) =>{
    const dispatch = useDispatch();

    //For memoization 
    const upcomingMovies = useSelector(
        (store) => store.movies.upcomingMovies
      );

    const getUpcomingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&page=1`, 
        API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results)); 
    };
    
    useEffect(() => {
        if (shouldFetch && !upcomingMovies) {
            getUpcomingMovies();
        }
    }, [shouldFetch, upcomingMovies]);

};

export default useUpcomingMovies;