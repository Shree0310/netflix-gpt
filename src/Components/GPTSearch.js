import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { LOGIN_PAGE_BACKGROUND } from "../Utils/Constants";

const GPTSearch = () =>{
    return (
    <div className="">
        <div className="absolute -z-10" >
            <img
            src={LOGIN_PAGE_BACKGROUND}
            alt="logo" /> 
        </div>
       <GPTSearchBar/>
       <GPTMovieSuggestions/>
    </div>
    )
}

export default GPTSearch;