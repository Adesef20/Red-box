"use client";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../libs/fetchMovies";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MovieSection = ({ title, endpoint, viewAllLink }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(endpoint, page);
      setMovies(data.results || []);
    };
    loadMovies();
  }, [endpoint, page]);

  return (
    <main className="my-10 px-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <a href={viewAllLink} className="text-blue-500">
          View All
        </a>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
          disabled={page === 1}
        >
          <FaArrowLeft size={18} />
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies?.slice(0, 5).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
        >
          <FaArrowRight size={18} />
        </button>
      </div>
    </main>
  );
};

export default MovieSection;
