import { useSelector } from "react-redux";
import lang from "../Utils/LanguageConstants";


const GPTSearchBar = () =>{
    const langKey = useSelector(store => store.config.language);

    return (
        <div className="pt-[20%] w-[1500px] flex justify-center">
            <form className=" bg-black w-1/2  flex py-10">
                <input type="text" placeholder={lang[langKey].gptPlaceHolder} className="w-4/5 px-2 h-12 m-6 rounded-md"/>
                <button className="w-1/5 h-12  px-2 m-6 bg-red-600 rounded-md text-white">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar;