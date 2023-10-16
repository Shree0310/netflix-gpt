import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{
    console.log(movies);
    return (
    <div className="p-3">
        <h1 className="text-lg font-bold text-white py-2 px-2">{title}</h1>
        <div className="flex overflow-x-scroll">
            
            <div className="flex">
                {movies?.map(movie =><MovieCard key={movie.id} posterPath = {movie.poster_path}/>)}
            </div>
        </div>
        
    </div>
    )
}

export default MovieList;