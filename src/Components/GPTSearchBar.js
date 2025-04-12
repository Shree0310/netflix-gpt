import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/LanguageConstants";
import { useRef, useState } from "react";
import Error from "./Error";
import { API_OPTIONS, TMDB_API_KEY } from "../Utils/Constants";
import { addGPTMovieResult } from "../Utils/GPTSlice";

const GPTSearchBar = () =>{
    const langKey = useSelector(store => store.config.language);
    const [error, setError] = useState(null);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    //Search movie in TMDB
    const searchMovieTMDB = async (movie)=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${TMDB_API_KEY}`, API_OPTIONS);
            const json = await data.json();
            return json.results;
        } catch (error) {
            console.error("Error searching TMDB:", error);
            return [];
        }
    }

    const handleGPTSearchClick = async () =>{
        if (!searchText.current?.value) {
            setError("Please enter a search query");
            return;
        }

        try {
            const systemPrompt = "You are a movie recommendation Assistant, your task is to suggest only 5 movie names based on users query. The output should only be a comma separated list. Example Result: mov1, mov2 ...";

            let messages = [{
                "role": "system",
                "content": systemPrompt
            }, {
                "role": "user",
                "content": searchText.current.value
            }]

            const fetchData = async ()=>{
                const url = "https://openai.adiagr.in/movie_gpt_openai/v1/chat/completions"; 
                const data = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: messages
                    })
                });
                
                if (!data.ok) {
                    throw new Error(`HTTP error! status: ${data.status}`);
                }
                
                let jsonData = await data.json();
                return jsonData;
            }

            let gptResults = await fetchData();
            
            if (!gptResults.choices?.[0]?.message?.content) {
                throw new Error("No results from GPT");
            }

            const gptMovieList = gptResults.choices[0].message.content.split(",").map(movie => movie.trim());

            //For each movie search TMDB API
            const PromiseArray = gptMovieList.map(movie => searchMovieTMDB(movie));
            const TMDBResults = await Promise.all(PromiseArray);
            
            dispatch(addGPTMovieResult({movieNames: gptMovieList, movieResults: TMDBResults }));
            setError(null);
        } catch (error) {
            console.error("Error in GPT search:", error);
            setError("Failed to fetch movie recommendations. Please try again.");
        }
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
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </div>
    )
}

export default GPTSearchBar;