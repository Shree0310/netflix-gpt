import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { LOGIN_PAGE_BACKGROUND } from "../Utils/Constants";

const GPTSearch = () =>{
    return (
    <div className="">
        <div className="fixed -z-10" >
            <img
            className="h-screen w-screen object-cover"
            src={LOGIN_PAGE_BACKGROUND}
            alt="logo" /> 
        </div>
        <div className="">
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
      
    </div>
    )
}

export default GPTSearch;