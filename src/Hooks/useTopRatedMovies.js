import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";

const useTopRatedMovies = () =>{

    const topRatedMovies = useSelector(store => store.topRatedMovies);

    const dispatch = useDispatch();

    const getTopRatedMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results));

    };

    useEffect(()=>{
        !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;