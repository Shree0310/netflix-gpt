import { useEffect} from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../Utils/Constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlice";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch()

    //For memoization 
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    //Fetching the trailer video and updating the store with the trailer video
    const getMovieVideos = async ()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`, API_OPTIONS);
            const json = await data.json();
            
            if (!json.results) {
                console.error("No video results found");
                return;
            }

            const filterData = json.results.filter(video => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            
            if (trailer) {
                dispatch(addTrailerVideo(trailer));
            } else {
                console.error("No trailer found");
            }
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    useEffect(()=>{
       !trailerVideo && getMovieVideos();
    },[]);
}

export default useMovieTrailer;