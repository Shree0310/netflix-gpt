import { useEffect} from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlice";



const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch()

    //Fetching the trailer video and updating the store with the trailer video
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        // setTrailerId(trailer.key);

    };

    useEffect(()=>{
        getMovieVideos();
    },[]);
}

export default useMovieTrailer;