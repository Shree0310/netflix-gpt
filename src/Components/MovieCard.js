import { IMG_CDN } from "../Utils/Constants";

const MovieCard = ({posterPath}) =>{
    return (
        <div className="w-[228px] m-1 h-40">
            <img alt="movie card"
            src={IMG_CDN + posterPath}/>
        </div>
    )
}

export default MovieCard;