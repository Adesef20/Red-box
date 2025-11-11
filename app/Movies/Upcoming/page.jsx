"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../libs/fetchMovies";
import MovieCard from "../components/MovieCard";


export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies("movie/popular", page);
      setMovies(data.results || []);
    };
    loadMovies();
  }, [page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="relative min-h-screen p-6 text-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg")',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10">
            <h1 className="mb-4 text-2xl font-bold">Popular Movies</h1>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}

            </div>
            <div className="flex justify-center gap-4 mt-6">
                <button onClick={handlePrev} className="px-4 py-2 bg-gray-800 rounded">Previous</button>
                <button onClick={handleNext} className="px-4 py-2 bg-gray-800 rounded">Next</button>
            </div>
        </div>
    </div>
  );
}
