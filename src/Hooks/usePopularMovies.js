import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{

    const dispatch = useDispatch(); 

    const popularMovies = useSelector(
        (store) => store.movies.popularMovies
      );
    

    //Fetching the data and then pushing that data into the store
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
        API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results)); 
    };

    //Making the API call in the useEffect because it needs to be called only once
    
    useEffect(() => {
        !popularMovies &&  getPopularMovies();
    }, []);

};

export default usePopularMovies;