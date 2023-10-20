import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () =>{

    const gpt = useSelector(store => store.gpt);
    const { movieResults, movieNames} = gpt;

    if(!movieNames) return null;
    if(!movieResults) return null;

    return (
        <div className="text-white bg-black bg-opacity-90 m-4">
            <div >
            {movieNames?.map((movieName, index) =>  
            <MovieList 
            title={movieName} 
            key={movieName} 
            movies={movieResults[index]}/> )}
            </div>
        </div>
        
    )
}

export default GPTMovieSuggestions;