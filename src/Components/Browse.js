import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{

    useNowPlayingMovies();

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