import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies.js";
import useTopRatedMovies from "../Hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.js";
import GPTSearch from "./GPTSearch.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Browse = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const isDemoMode = sessionStorage.getItem('isDemoMode') === 'true';

    useEffect(() => {
        // Only redirect to login if not in demo mode and not logged in
        if (!user && !isDemoMode) {
            navigate("/");
        }
    }, [user, isDemoMode, navigate]);

    // Always call hooks, but they can handle their own conditional logic internally
    useNowPlayingMovies(user || isDemoMode);
    usePopularMovies(user || isDemoMode);
    useTopRatedMovies(user || isDemoMode);
    useUpcomingMovies(user || isDemoMode);

    return (
        <div>
                <Header/>
                {
                    showGptSearch ? (<GPTSearch/>) : 
                    (
                    <>
                    <MainContainer/>
                    <SecondaryContainer/>
                    </>   
                    )
                }
                 
                
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