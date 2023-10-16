import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";

const MainContainer = ()=>{

    //Using useSelector hook to get the movies data from the data
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    return (
        <div>
            Main Container
            <VideoTitle/>
            <VideoBackground/>

        </div>
    )
}

export default MainContainer;