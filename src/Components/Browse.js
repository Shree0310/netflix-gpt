import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies.js";
import useTopRatedMovies from "../Hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.js";

const Browse = () =>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
                <Header/>
                <MainContainer/>
                <SecondaryContainer/>
                {/* 
                    - Main Container
                        -Video Background
                        - Movie Name
                        - About the movie
                    - Secondary Container
                        - Movie list * n
                        - cards * n              
                */}
        </div>
       
    );
}

export default Browse;