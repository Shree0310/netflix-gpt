import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/LanguageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
import Error from "./Error";
import { API_OPTIONS } from "../Utils/Constants";
import { addGPTMovieResult } from "../Utils/GPTSlice";



const GPTSearchBar = () =>{
    const langKey = useSelector(store => store.config.language);

    const searchText = useRef(null);

    const dispatch = useDispatch();

    //Search movie in TMDB
    const searchMovieTMDB = async (movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
                                    +movie+ '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        return json.results;

    }

    const handleGPTSearchClick = async () =>{
        console.log(searchText.current.value);
        //Make an API call to open ai and get movie results

        const GPTQuery = "Act as a movie recommendation system" + searchText.current.value + "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmal, Koi Mil Gya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery}],
            model: 'gpt-3.5-turbo',
          });
          if(!gptResults.choices){
            <Error/>
          }
          console.log(gptResults.choices?.[0]?.message.content);
          const gptMovieList = gptResults.choices?.[0]?.message.content.split(",");

          //For each movie search TMDB API
          const PromiseArray = gptMovieList.map(movie => searchMovieTMDB(movie));

          const TMDBResults = await Promise.all(PromiseArray);

          console.log(TMDBResults);
          
          dispatch(addGPTMovieResult({movieNames: gptMovieList, movieResults: TMDBResults }));
    }

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input 
                ref={searchText}
                type="text" 
                placeholder={lang[langKey].gptPlaceHolder} 
                className="p-4 m-4 col-span-9"/>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg text-sm md:text-lg" 
                onClick={handleGPTSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar;