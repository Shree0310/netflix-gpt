import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API_KEY } from "../Utils/Constants";

const useTopRatedMovies = (shouldFetch = true) =>{
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(
        (store) => store.movies.topRatedMovies
      );

    const getTopRatedMovies = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&page=1`, API_OPTIONS);
        const json = await data.json();
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results));

    };

    useEffect(() => {
        if (shouldFetch && !topRatedMovies) {
            getTopRatedMovies();
        }
    }, [shouldFetch, topRatedMovies]);
}

export default useTopRatedMovies;