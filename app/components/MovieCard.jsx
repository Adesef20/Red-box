"use client";
import Image from "next/image";

const MovieCard = ({ movie }) => {
    if (!movie) return null;

const imgUrl =
    movie.poster_path || movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`
      : "/placeholder.png";

    return(
        <main className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image 
            src={imgUrl} 
            alt={movie.title || movie.name || "Movie Poster"} 
            width={500} height={300} 
            className="w-full h-auto object-cover"/>
            <div className="p-4">
                <h2 className="text-white text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-300 text-sm">Rating: {movie.vote_average?.toFixed(1)}</p>
            </div>
        </main>
    );
}

export default MovieCard;